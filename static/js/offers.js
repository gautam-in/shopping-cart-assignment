let offers_p = document.querySelector('section#offers-area');
let slides_p = offers_p.querySelector('div.slides');
let slide_selector = offers_p.querySelector('div.slide-pos');

function AddASlide(offer) {
    let slide = document.createElement('div');
    let img = document.createElement('img');
    slide.classList.add('slide');

    img.src = offer.bannerImageUrl;
    img.alt = offer.bannerImageAlt;
    slide.append(img);
    slides_p.append(slide);
}

function addslideSelector(slidePos) {
    let pos = document.createElement('div');
    pos.classList.add('pos')
    pos.addEventListener('click', () => {
        SlideNav._stopAutoScroll();
        PosClick(slidePos);
        SlideNav._startAutoScroll();
    })
    slide_selector.append(pos);
}
function activePos(idx) {
    let items = slide_selector.querySelectorAll('.pos');
    items.forEach(item => item.classList.remove('active'));
    items[idx].classList.add('active');
}
function PosClick(slidePos) {
    activePos(slidePos - 1)
    setActiveSlide(slidePos - 1);
}
function setActiveSlide(slidePos) {
    let slides = slides_p.querySelectorAll('.slide');
    slides.forEach(item => item.classList.remove('active'));
    slides[slidePos].classList.add('active');
}

const SlideNav = {
    Position: 0,
    timer_h: 0,
    SlideCount: function () { return slides_p.querySelectorAll('.slide').length },
    NextClick: function (e) {
        this._stopAutoScroll();

        let count = this.SlideCount();
        if (this.Position >= count) {
            this.Position = 1;
        } else {
            this.Position++;
        }
        PosClick(this.Position);

        this._startAutoScroll();
    },
    PrevClick: function (e) {
        this._stopAutoScroll();
        let count = this.SlideCount();
        if (this.Position <= 1) {
            this.Position = count;
        } else { this.Position--; }
        PosClick(this.Position);
        // if (this.Position < count) {
        //     let i = --this.Position;
        //     PosClick(i);
        // }
        this._startAutoScroll();
    },
    buildSlides: function () {

        Service.GetOffers().then((res) => {
            res.json().then((items) => {
                let active_offers = FilterAndSortCategories(items).filter((item) => { return item.isActive });

                for (let i = 0; i < active_offers.length; i++) {
                    const element = active_offers[i];
                    AddASlide(element);
                    addslideSelector(i + 1)
                }

                if (active_offers.length > 0) {
                    this.Position = 1;
                    PosClick(this.Position);
                }
                setTimeout(() => {
                    this._startAutoScroll();
                }, 3000);
            })
        });
    },
    _startAutoScroll: function () {
        this.timer_h = setInterval(() => {
            this.NextClick();
        }, 3000);
    },
    _stopAutoScroll: function () {
        clearInterval(this.timer_h);
    }
}
offers_p.querySelector('.slider-nav .slide-next').addEventListener('click', () => { SlideNav.NextClick() })
offers_p.querySelector('.slider-nav .slide-prev').addEventListener('click', () => { SlideNav.PrevClick() })