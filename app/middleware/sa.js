import superAgent from 'superagent'
import config from 'config';

var host = config.API_URL;
var IS_DEBUG = (process.env.DEBUG === "true");

export function getAllByIndexFilterSkipLimit(table,index,value,skip,limit,sort,cb){
    if (IS_DEBUG) {
        console.log("/gapi/"+table+"/"+index+"/"+value+"/"+skip+"/"+limit+"?sort="+sort);
    }
    superAgent
        .get("/gapi/"+table+"/"+index+"/"+value+"/"+skip+"/"+limit+"?sort="+sort).end(function(err, res){
        cb(err,res)
    });
}

export function getAllByRangeIndexOrderByFilterSkipLimit(table,index,value,skip,limit,sort,orderby,range,cb){
    var target = "/gapi_range/"+table+"/"+index+"/"+value+"/"+skip+"/"+limit+"?sort="+sort+"&order="+orderby+"&range="+range;
    if (IS_DEBUG) {
        console.log("getAllByRangeIndexOrderByFilterSkipLimit -> ",target);
    }
    superAgent
        .get(target).end(function(err, res){
        cb(err,res)
    });
}


export function getAllByIndexOrderByFilterSkipLimit(table,index,value,skip,limit,sort,orderby,cb){
    if (IS_DEBUG) {
        console.log("/gapi/"+table+"/"+index+"/"+value+"/"+skip+"/"+limit+"?sort="+sort+"&order="+orderby);
    }
    superAgent
        .get("/gapi/"+table+"/"+index+"/"+value+"/"+skip+"/"+limit+"?sort="+sort+"&order="+orderby).end(function(err, res){
        cb(err,res)
    });
}

export function getAPIAllByIndexFilterSkipLimit(table,index,value,skip,limit,sort,cb){
    var target = `${host}/listallbyindexorderby/${table}/${index}/${value}/${skip}/${limit}/${sort}/`;
    if (IS_DEBUG) {
        console.log("getAPIAllByIndexFilterSkipLimit->",target);
    }
    superAgent
        .get(target)
        .withCredentials()
        .end(function(err, res){
        cb(err,res)
    });
}

export function loadByID(table,index,cb){
    var target = `${host}/read/${table}/${index}/`;;
    if (IS_DEBUG) {
        console.log("loadByID->",target);
    }
    superAgent
        .get(target)
        .withCredentials()
        .end(function(err, res){
            cb(err,res)
        });
}


export function doImageResize(url,data,cb){
    if (IS_DEBUG) {
        console.log("/gapi/"+table+"/"+index+"/"+value+"/"+skip+"/"+limit);
    }
    superAgent
        .post(url).data(data).end(function(err, res){
        cb(err,res)
    });
}

export function saSentimentCommentDetail(url,lang,refresh,cb){
    var target = `${config.FE_SNT_URL}/moody?vid=${url}`;
    if(lang) {
        target =  target+`&lang=${lang}`;
    }

    if(refresh){
        target =  target+`&refresh=${refresh}`;
    }
    if (IS_DEBUG) {
        console.log("saSentimentCommentDetail -> ",target);
    }
    superAgent.get(target).end(function(err, res){
        // console.log(res.body)
        cb(err,res)
    });
}