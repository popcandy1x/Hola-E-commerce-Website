const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const link1=document.getElementById('link1')
const link2=document.getElementById('link2')
const close=document.getElementById('close')



bar.addEventListener('click',() => {
    nav.classList.add('active')
})

close.addEventListener('click',()=>{
    nav.classList.remove('active')
})

link1.addEventListener('click',() => {
    nav.classList.remove('active')
})

link2.addEventListener('click',() => {
    nav.classList.remove('active')
})


