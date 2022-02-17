import loginHtml from '../html/loginForm.html'
export function login(target) {
    let app_div = document.getElementById('app');
    let div = document.createElement('div');
    div.innerHTML = loginHtml;
    target.innerHTML = '';
    target.appendChild(div);
};