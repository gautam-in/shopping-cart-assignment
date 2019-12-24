const common = (function() {
    return {
        openShoppingCart: () => {
            document.getElementById('cart').classList.add("show");
            const body = document.body;
            body.style.overflow = 'hidden';
        },


        closeShoppingCart: e => {
            e.stopPropagation();
            document.getElementById('cart').classList.remove("show");
            body.style.overflow = 'auto';
        }
    };
})();