const numpageopen = document.querySelector('#numberpageopen')
const numpage = document.querySelector('#numberpage')
const numpageclose = document.querySelector('#numpageclose')
numpageopen.addEventListener('click',()=>{
    numpage.style.display = 'flex'
})
numpageclose.addEventListener('click',()=>{
    numpage.style.display = 'none'
})

const profilepage = document.getElementById('profilephotopage')
const profileopen = document.getElementById('profileopen')
profileopen.addEventListener('click',()=>{
    profilepage.style.display='flex'
})