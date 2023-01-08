/* ========================================================================
 * Pure Cookie Consent JS: purecookieconsent.js v1.0.1
 * https://romulobrasil.com
 * Copyright (c) 2023 Rômulo Brasil
 * ========================================================================
 */

const PureCookieConsent = {
  default: {
    txt: 'Este site usa cookies para garantir a melhor experiência do usuário. Ao continuar navegando no site, você concorda com o uso de cookies.',
    btnTxt: 'Eu concordo',
    styleBar: {
      'position': 'fixed',
      'left': '0',
      'right': '0',
      'bottom': '15px',
      'margin-left': 'auto',
      'margin-tighe': 'auto',
      'font-family': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    styleCon: {
      'display': 'flex',
      'justify-content': 'space-between',
      'align-items': 'center',
      'background-color': '#FFF',
      'color': '#5c6d7e',
      'padding': '1.5em',
      'box-shadow': '0px 0px 64px rgb(0 0 0 / 10%)',
      'border-radius': '5px',
    },
    styleTxt: {
      'margin': '0',
      'color': '#5c6d7e',
      'font-size': '14px',
      'font-weight': '300',
    },
    styleBtn: {
      'border': '0',
      'padding': '0 46px',
      'background-color': '#5c6d7e',
      'color': '#fff',
      'cursor': 'pointer',
      'font-size': '15px',
      'font-weight': '500',
      'line-height': '40px',
      'letter-spacing': '1px',
      'border-radius': '0.25rem',
    },
  },
  show(){
    const args = (arguments[0]) ? arguments[0] : false;
    if(this.getCookie('cookieConsent') != null) {
      const cookieConsentBar = document.createElement('div');
      const cookieConsentCon = document.createElement('div');
      const cookieConsentTxt = document.createElement('p');
      const agreeBtn = document.createElement('button');
      
      cookieConsentBar.id = 'pureCookieConsent';
      cookieConsentBar.classList.add('pure-cookie-consent');      
      cookieConsentCon.classList.add('container', 'pure-cookie-consent_box');      
      cookieConsentTxt.classList.add('pure-cookie-consent__txt');
      agreeBtn.classList.add('pure-cookie-consent__btn');
      
      cookieConsentTxt.innerHTML = (args['txt']) ? args['txt'] : this.default['txt'];
      agreeBtn.innerHTML = (args['btnTxt']) ? args['btnTxt'] : this.default['btnTxt'];
      
      cookieConsentCon.append(cookieConsentTxt, agreeBtn);
      cookieConsentBar.appendChild(cookieConsentCon);

      if(args['style'] === undefined){
        this.css(cookieConsentBar, this.default['styleBar']);
        this.css(cookieConsentCon, this.default['styleCon']);
        this.css(cookieConsentTxt, this.default['styleTxt']);
        this.css(agreeBtn, this.default['styleBtn']);
      }

      agreeBtn.addEventListener('click', () => {
        this.setCookie('cookieConsent', true, 365);
        this.hideCookieConsentBar();
      });

      document.body.appendChild(cookieConsentBar);
    }
  },
  hideCookieConsentBar(){
    cookieConsentBar.style.display = 'none';
  },
  setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  },
  getCookie(name){
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return
      return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  css(element, style){
    for (const property in style) {
      element.style[property] = style[property];
    }
  },
}