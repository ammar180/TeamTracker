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
const tapLabels = document.querySelectorAll(".tab-container .tab_label");
const indicator = document.querySelector(".tab-container .indicator");

tapLabels.forEach((e, inx) => {
    e.addEventListener("click", (event) => {
        indicator.style.left = `${150 * inx +2}px`;
    })
});
function checking(){
    let ch = document.querySelector('.checker');
    ch.checked = !ch.checked;
}