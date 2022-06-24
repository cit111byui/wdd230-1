const images = document.querySelectorAll('[data-src]');
const options = {threshold: .5, rootMargin: "0px 0px 100px 0px"};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
);

images.forEach(image => {
    io.observe(image);
})


// localStorage

localStorage.setItem('msg1', 'Hello Permanent');
sessionStorage.setItem('msg2', 'Hi Temporary');

console.log(localStorage.getItem('msg1'));


// Days since last visit

let visit_heading = document.querySelector('.visited');

let now_date = new Date();


let stored_date = localStorage.getItem('last_visited');
let last_date =  new Date(stored_date);

if (!stored_date) {
    visit_heading.textContent = "Welcome";
} else {
    // calc the diff to the two dates
    let diff_time = now_date.getTime() - last_date.getTime();

    // calc the number of days between the two dates
    let diff_days = Math.round(diff_time/(1000 * 60 * 60 * 24));

    visit_heading.textContent = diff_days + ' days since your last visit';

}

localStorage.setItem('last_visited', now_date);