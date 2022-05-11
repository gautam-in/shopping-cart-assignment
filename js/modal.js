function cartWindow() {
    // Get the modal
    let modal = document.getElementsByClassName("modalClass")[0];
    modal.style.display = "block";

    //populate UI
    cartInstance.showItems();

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }

    //get the checkout button and close
    let btn = document.getElementsByClassName("modalCartButton")[0];
    btn.onclick = function(e) {
        modal.style.display = "none"
    }
}