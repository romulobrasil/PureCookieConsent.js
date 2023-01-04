/* ========================================================================
 * Pure Cookie Consent JS: purecookieconsent.js v1.0
 * https://romulobrasil.com
 * Copyright (c) 2023 Rômulo Brasil
 * ========================================================================
 */

const PureCookieConsent = {
  default: {
    txt: 'Este site usa cookies para garantir a melhor experiência do usuário. Ao continuar navegando no site, você concorda com o uso de cookies.',
    btnTxt: 'Eu concordo',
    styleBar: {
      'width': '100%',
      'display': 'flex',
      'justify-content': 'space-between',
      'align-items': 'center',
      'position': 'fixed',
      'left': '0',
      'bottom': '0',
      'padding': '10px 15px',
      'background-color': '#ecf0f1',
      'color': '#5c6d7e',
      'font-family': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    styleTxt: {
      'margin': '0',
      'color': '#5c6d7e',
      'font-size': '14px',
      'font-weight': '300',
    },
    styleBtn: {
      'border': '0',
      'padding': '4px 6px',
      'background-color': '#5c6d7e',
      'color': '#fff',
      'cursor': 'pointer',
    },
  },
  show(){
    const args = (arguments[0]) ? arguments[0] : false;
    if(this.getCookie('cookieConsent') != null) {
      const cookieConsentBar = document.createElement('div');
      const cookieConsentTxt = document.createElement('p');
      const agreeBtn = document.createElement('button');
      
      cookieConsentBar.id = 'pureCookieConsent';
      cookieConsentBar.classList.add('pure-cookie-consent');      
      cookieConsentTxt.classList.add('pure-cookie-consent__txt');
      agreeBtn.classList.add('pure-cookie-consent__btn');
      
      cookieConsentTxt.innerHTML = (args['txt']) ? args['txt'] : this.default['txt'];
      agreeBtn.innerHTML = (args['btnTxt']) ? args['btnTxt'] : this.default['btnTxt'];
      
      cookieConsentBar.append(cookieConsentTxt, agreeBtn);

      if(args['style'] === undefined){
        this.css(cookieConsentBar, this.default['styleBar']);
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