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