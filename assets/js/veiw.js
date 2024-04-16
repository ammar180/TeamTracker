function appendMenue() {
    menue = document.querySelector('.menue');
    menue.style.visibility == 'visible' ? menue.style.visibility = 'hidden' : menue.style.visibility = 'visible';
}
const items = document.querySelectorAll('nav .nav-items .op');
items.forEach((e) => {
    e.addEventListener('click', function (event) {
        let notSlc = document.querySelector('nav .nav-items .active');
        notSlc.classList.remove("active");

        let slc = event.target;
        slc.classList.add("active");
    });
});