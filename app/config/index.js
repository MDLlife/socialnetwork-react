var BASE_URL = 'https://www.mdl.live';
var API_URL = 'https://api.mdl.live';
var ELK_URL = 'https://elk.mdl.live';

if (typeof window !== 'undefined') {
    if (document.location.hostname.indexOf("localhost") !== -1) {
        BASE_URL = 'http://localhost:3002';
        API_URL = 'http://localhost:3010';
        ELK_URL = 'http://g7-box:9200';
    }
}
else if(process.env.NODE_ENV !== "production"){
    BASE_URL = 'http://localhost:3002';
    API_URL = 'http://localhost:3010';
    ELK_URL = 'http://g7-box:9200';
}

let config = {
    BASE_URL: BASE_URL,
    API_URL: API_URL,
    ELK_URL: ELK_URL,
    LOGIN_URL: API_URL + '/login',
};


export default config;
