const html =document.querySelector('.html-code textarea');
const css =document.querySelector('.css-code textarea');
const js =document.querySelector('.js-code textarea');
const result =document.querySelector('#result');

function run(){

localStorage.setItem('html',html.value);
localStorage.setItem('css',css.value);
localStorage.setItem('js',js.value);
result.contentDocument.body.innerHTML=`<style>${localStorage.css}</style>`+localStorage.html;
result.contentWindow.eval(localStorage.js);
}

html.onkeyup = ()=>run();
css.onkeyup = ()=>run();
js.onkeyup = ()=>run();


html.value=localStorage.html;
css.value=localStorage.css;
js.value=localStorage.js;