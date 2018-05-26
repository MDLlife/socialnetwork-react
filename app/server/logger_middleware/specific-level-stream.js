import bunyan, { safeCycles } from 'bunyan';

export default class SpecificLevelStream {
  constructor(levels, stream) {
    this.levels = {};

    levels.forEach((level) => {
      this.levels[bunyan.resolveLevel[level]] = true;
    });

    this.stream = stream;
  }

  write(rec) {
    if (this.levels[rec.level] !== undefined) {
      this.stream.write(
        `${JSON.stringify(rec, safeCycles())} \n`
      );
    }
  }
}
