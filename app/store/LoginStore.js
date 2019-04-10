/** LOGIN COMPONENT **/

import jwt_decode from 'jwt-decode';
import {EventEmitter} from 'events';

class LoginStore extends EventEmitter {

    constructor() {
        super();
        this._user = null;
        this._error = null;
        this._jwt = null;

        //attempt auto-login
        if (typeof window !== 'undefined') {
            console.log('&*&*&*& attempting auto-login in LoginStore');
            this._autoLogin();
        }
    }


    _autoLogin() {
        if (typeof window !== 'undefined') {
            let jwt = localStorage.getItem("jv_jwt");

            if (window.parent.location.href.match(/jwt=/) || !jwt || jwt === "null") {

                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for (var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }

                var session = vars["session"];
                var jv_jwt = vars["jv_jwt"];

                console.log("&*&*&* NEW SESSION, will login from req params");
                let success = false;

                if (!session) {
                    createCookie("session", session);
                    success = true;
                }

                if(jv_jwt) {
                    localStorage.setItem("jv_jwt", jv_jwt);
                    this._jwt = jv_jwt;
                    this._user = jwt_decode(this._jwt);
                    success = true;
                }
                if(success){
                    console.log("&*&*& NEW SESSION,* autologin success");
                } else {
                    console.log("&*&*&* NEW SESSION, failed to get session or jwt token :| --> " + window.location.href);
                }

            } else {
                console.log("&*&*&* will login from localStorage");
                this._jwt = jwt;
                console.log("this._jwt, ", this._jwt);
                if (this._jwt) {
                    this._user = jwt_decode(this.jwt);
                    console.log("&*&*&* autologin success, ", this._user);
                } else {
                    console.log("&*&*&* failed to get session or jwt token :| --> " + window.location.href);
                }
            }


            console.log("&*&*&* will remove credentials from url");
            //TODO: remove only session and jv_jwt from parameters, it may affect other pages in case we start using params :|

            if (window.parent.location.href.match(/session=/)) {
                if (typeof (history.pushState) !== "undefined") {
                    var obj = {Title: document.title, Url: window.parent.location.pathname};
                    history.pushState(obj, obj.Title, obj.Url);
                } else {
                    window.parent.location = window.parent.location.pathname;
                }
            }


        }
    }

    get user() {
        return this._user;
    }

    get error() {
        return this._error;
    }

    get jwt() {
        return this._jwt;
    }

    isLoggedIn() {
        return !!this._user;
    }
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}


export default new LoginStore();
