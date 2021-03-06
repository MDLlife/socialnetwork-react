var BASE_URL = 'https://www.mdl.live';
var API_URL = 'https://api.mdl.live';
var ELK_URL = 'https://elk.mdl.live';
var APIS_URL = 'https://apis.mdl.live'
var COMENTARISMO_URL = 'https://api.comentarismo.com';
var COMENTARISMO_ANALYTICS_URL = 'https://analytics.comentarismo.com';
var COMENTARISMO_KEY = "RElbq_mfKembo1_DsNFeXzP_l3AAM0O-4oudmibWkw9K1Sf2jK8O2mX_O8m4GVbDaqmwhqMyn6ksaEgrEXi6vHW72hyMBFrNiJ6vZiX7TeiVNcDooBmuWdwmSA==";
var COMENTARISMO_OPERATOR = "https://mdl.live"

// http://127.0.0.1:3002 will redirect to local dev backend
if (process.env.DEV || typeof window !== "undefined" && document.location.hostname.indexOf("127.0.0.1") !== -1) {
    BASE_URL = 'http://localhost:3002';
    API_URL = 'http://localhost:3010';
    ELK_URL = 'http://g7-box:9200';
    APIS_URL = 'http://localhost:9001'

    COMENTARISMO_URL = 'http://localhost:3000'
    COMENTARISMO_ANALYTICS_URL = 'http://localhost:3013'

    COMENTARISMO_KEY = '-Bpm-YW2T05QzfOB0lCU70NJzy85YXJGq5WtUVAJf5F3jKBGujOtXdTMgGKF_CzINYhr8htHh-esx1PpaGile3tP-O868VQrSjYT'
    COMENTARISMO_OPERATOR = "http://comentarismo.com"

// dev mode uses dev server socialnetwork-dev.cloud.mdl.live
} else if (process.env.NODE_ENV === "development") {
    BASE_URL = 'http://localhost:3002';
    API_URL = 'https://socialnetwork-dev.cloud.mdl.live';
    ELK_URL = 'http://g7-box:9200';
    APIS_URL = 'http://localhost:9001'

    //TODO: setup comentarismo dev server
    COMENTARISMO_URL = 'http://localhost:3000'
    COMENTARISMO_ANALYTICS_URL = 'http://localhost:3013'

    COMENTARISMO_KEY = 'tr5iOQO2mzP4qZwjYghuQLY--j_2ingrPOcfEEQ3K-fprnvrZMSJnX_23U8iMi6v9Vr2E-rf9TmozGBAtQ8pei4Zl5vLaeEdomMJ'
    COMENTARISMO_OPERATOR = "http://comentarismo.com"
}

console.log("&*&*&*& CONSOLE: ", process.env.DEV, API_URL);

let config = {
    BASE_URL: BASE_URL,
    API_URL: API_URL,
    ELK_URL: ELK_URL,
    APIS_URL:APIS_URL,
    COMENTARISMO_URL: COMENTARISMO_URL,
    COMENTARISMO_ANALYTICS_URL:COMENTARISMO_ANALYTICS_URL,
    COMENTARISMO_KEY:COMENTARISMO_KEY,
    COMENTARISMO_OPERATOR:COMENTARISMO_OPERATOR,
    LOGIN_URL: API_URL + '/login',
};


export default config;
