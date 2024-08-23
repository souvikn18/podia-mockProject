const navbar = document.getElementById("navbar")

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition>50) {
        navbar.classList.add('shadow')
    }else{
        navbar.classList.remove('shadow')
    }
})
