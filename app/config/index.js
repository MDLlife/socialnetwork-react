var BASE_URL = 'https://www.mdl.live';
var API_URL = 'https://api.mdl.live';
var ELK_URL = 'https://elk.mdl.live';
var COMENTARISMO_URL = 'https://api.comentarismo.com';
var COMENTARISMO_KEY = "RElbq_mfKembo1_DsNFeXzP_l3AAM0O-4oudmibWkw9K1Sf2jK8O2mX_O8m4GVbDaqmwhqMyn6ksaEgrEXi6vHW72hyMBFrNiJ6vZiX7TeiVNcDooBmuWdwmSA==";

// http://127.0.0.1:3002 will redirect to local dev backend
if (process.env.DEV || typeof window !== "undefined" && document.location.hostname.indexOf("127.0.0.1") !== -1) {
    BASE_URL = 'http://localhost:3002';
    API_URL = 'http://localhost:3010';
    ELK_URL = 'http://g7-box:9200';
    COMENTARISMO_URL = 'http://localhost:3000'
    COMENTARISMO_KEY = 'tr5iOQO2mzP4qZwjYghuQLY--j_2ingrPOcfEEQ3K-fprnvrZMSJnX_23U8iMi6v9Vr2E-rf9TmozGBAtQ8pei4Zl5vLaeEdomMJ'

// dev mode uses dev server socialnetwork-dev.cloud.mdl.live
} else if (process.env.NODE_ENV === "development") {
    BASE_URL = 'http://localhost:3002';
    API_URL = 'https://socialnetwork-dev.cloud.mdl.live';
    ELK_URL = 'http://g7-box:9200';
    //TODO: setup comentarismo dev server
    COMENTARISMO_URL = 'http://localhost:3000'
    COMENTARISMO_KEY = 'tr5iOQO2mzP4qZwjYghuQLY--j_2ingrPOcfEEQ3K-fprnvrZMSJnX_23U8iMi6v9Vr2E-rf9TmozGBAtQ8pei4Zl5vLaeEdomMJ'
}

console.log("&*&*&*& CONSOLE: ", process.env.DEV, API_URL);

let config = {
    BASE_URL: BASE_URL,
    API_URL: API_URL,
    ELK_URL: ELK_URL,
    COMENTARISMO_URL: COMENTARISMO_URL,
    COMENTARISMO_KEY:COMENTARISMO_KEY,
    LOGIN_URL: API_URL + '/login',
};


export default config;
