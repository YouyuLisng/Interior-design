var nav = document.querySelector('.temp')
window.addEventListener('scroll', (e) => {
    let scrollY = this.scrollY;
    if (scrollY > 200) {
        this.nav.classList.add("active"); 
    } else {
        this.nav.classList.remove("active"); 
    }
})