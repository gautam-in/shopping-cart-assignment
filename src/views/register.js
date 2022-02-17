import registerHtml from '../html/registerForm.html'
export function register(target) {
    let app_div = document.getElementById('app');
    let div = document.createElement('div');
    div.innerHTML = registerHtml;
    target.innerHTML = '';
    target.appendChild(div);

};