import superAgent from 'superagent'
import config from 'config';

var COMENTARISMO_URL = config.COMENTARISMO_URL;
var API_URL = config.API_URL;
var IS_DEBUG = (process.env.DEBUG === "true");


export function getNewsFromComentarismoAPI(table,index,value,skip,limit,sort,orderby,range,cb){
    var table = "news"
    var db = "comentarismo"

    var target = `${COMENTARISMO_URL}/list/${table}?_sort=${sort}&_order=${orderby}&_start=${skip}&_end=${limit}&db=${db}&${index}=${value}`;
    if (IS_DEBUG) {
        console.log("getNewsFromComentarismoAPI -> ",target);
    }
    superAgent
        .get(target)
        .set('COMENTARISMO-KEY', config.COMENTARISMO_KEY)
        .end(function(err, res){
        cb(err,res)
    });
}


export function getUser(id,cb){
    var target = `${API_URL}/v1/read/users/${id}`;
    if (IS_DEBUG) {
        console.log("getUser -> ",target);
    }
    superAgent
        .get(target)
        .withCredentials()
        .end(function(err, res){
        cb(err,res)
    });
}