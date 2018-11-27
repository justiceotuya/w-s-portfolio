//check initial window size and


let portfolioRow = document.querySelectorAll(".section-portfolio .row div");
let brandDesktop = document.querySelector('.brands-desktop');

let brandMobile = document.querySelector('.brands-mobile');

function resize() {
    if (window.innerWidth < 425) {
        portfolioRow.forEach((portfolio) => {
            portfolio.classList.add("col-1");
            portfolio.classList.remove("col-1-of-3");
        })

        brandMobile.classList.add('show');
        brandMobile.classList.remove('hide');
        brandDesktop.classList.add('hide');
        brandDesktop.classList.remove('show');

    } else {
        portfolioRow.forEach((portfolio) => {
            portfolio.classList.remove("col-1")
            portfolio.classList.add("col-1-of-3")
        })
        brandMobile.classList.add('hide');
        brandMobile.classList.remove('show');
        brandDesktop.classList.add('show');
        brandDesktop.classList.remove('hide');

    }
}

resize()

window.addEventListener('resize', () => {
    resize()
});
