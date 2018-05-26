import bunyan from 'bunyan';
import fs from 'fs';
import path from 'path';

class LogstashStream {

  // @param stream is only for testing purpose
  constructor(filePath, stream) {
    if (filePath) {
      // this one will break if path is not correct
      fs.statSync(path.dirname(filePath));
    }

    if (!stream) {
      this.fileStream = fs.createWriteStream(filePath, {
        flags: 'a',
        encoding: 'utf8'
      });
    } else {
      this.fileStream = stream;
    }
  }

  write(rawRecord) {
    let rec = null;

    if (typeof rawRecord === 'string') {
      rec = JSON.parse(rawRecord);
    } else {
      rec = rawRecord;
    }

    const time = rec.time || new Date();
    const msg = rec.msg;
    const level = rec.level; // it's a number

    // Remove internal bunyan fields that won't mean anything outside of
    // a bunyan context.
    delete rec.v;
    delete rec.time;
    delete rec.msg;

    rec = Object.assign({
      '@timestamp': typeof time === 'string' ? time : time.toISOString(),
      message: msg,
      levelName: bunyan.nameFromLevel[level]
    }, rec);

    const str = JSON.stringify(rec, bunyan.safeCycles());

    this.fileStream.write(`${str}\n`);
  }
}

export default LogstashStream;
