var BASE_URL = 'https://www.mdl.live';
var API_URL = 'https://api.mdl.live';
var ELK_URL = 'https://elk.mdl.live';

// http://127.0.0.1:3002 will redirect to local dev backend
if (process.env.DEV || typeof window !== "undefined" && document.location.hostname.indexOf("127.0.0.1") !== -1) {
    BASE_URL = 'http://localhost:3002';
    API_URL = 'http://localhost:3010';
    ELK_URL = 'http://g7-box:9200';

// dev mode uses dev server socialnetwork-dev.cloud.mdl.live
} else if (process.env.NODE_ENV === "development") {
    BASE_URL = 'http://localhost:3002';
    API_URL = 'https://socialnetwork-dev.cloud.mdl.live';
    ELK_URL = 'http://g7-box:9200';
}

console.log("&*&*&*& CONSOLE: ", process.env.DEV, API_URL);

let config = {
    BASE_URL: BASE_URL,
    API_URL: API_URL,
    ELK_URL: ELK_URL,
    LOGIN_URL: API_URL + '/login',
};


export default config;
