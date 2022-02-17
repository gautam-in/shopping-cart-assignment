import navBarhtml from "./html/navbar.html";
export function navbar(){

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, []);
        //document.querySelectorAll(".button-collapse").sideNav();
        //document.getElementsByClassName('sidenav-item')[0].addEventListener('click',M.Sidenav.prototype.close);
    });

    return navBarhtml;
}
function updateHash(hash){
    window.location.hash = hash;
}

