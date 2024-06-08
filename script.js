var btn = document.getElementById('upto')


onscroll = function () {

    if (this.scrollY >= 400) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'

    }

}

btn.addEventListener('click', function () {
    scroll({
        behavior: "smooth",
        top: 0,

    })
})



document.getElementsByClassName('active')[0].addEventListener('click', function () {

    document.getElementsByClassName('navbar')[0].classList.toggle('active22')


})




