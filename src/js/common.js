const common = (function() {
    const body = document.body;
    return {
        openShoppingCart: () => {
            document.getElementById('cart').classList.add("show");

            body.style.overflow = 'hidden';
        },


        closeShoppingCart: e => {
            e.stopPropagation();
            document.getElementById('cart').classList.remove("show");
            body.style.overflow = 'auto';
        }
    };
})();

//===========================================================================================================
//JS for Floating label
const FloatLabel = (() => {

    // add active class
    const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('active');
    };

    // remove active class
    const handleBlur = (e) => {
        const target = e.target;
        if (!target.value) {
            target.parentNode.classList.remove('active');
        }
    };

    // register events
    const bindEvents = (element) => {
        const floatField = element.querySelector('input');
        if (floatField) {

            floatField.addEventListener('focus', handleFocus);
            floatField.addEventListener('blur', handleBlur);
        }
    };

    // get DOM elements
    const init = () => {
        const floatContainers = document.querySelectorAll('.form-group');

        floatContainers.forEach((element) => {
            if (element && element.querySelector('input') && element.querySelector('input').value) {
                element.classList.add('active');
            }

            bindEvents(element);
        });
    };

    return {
        init: init
    };
})();

FloatLabel.init();





//=================================================================================================