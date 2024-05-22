const btn = document.querySelector('.btn')
const container = document.querySelector('body')

btn.onclick = function(){
    this.classList.toggle('ativo-1')
    container.classList.toggle('ativo-1')
}