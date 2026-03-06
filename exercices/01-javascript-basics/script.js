const open = document.getElementById('open');
const close = document.getElementById('close');
const content = document.getElementById('content');

function click() {
    open.disabled = !open.disabled;
    close.disabled = !close.disabled;
    content.classList.toggle('hidden');
}

open.addEventListener('click', click);
close.addEventListener('click', click);