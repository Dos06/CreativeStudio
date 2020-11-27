function menuFunc() {
    var x = document.getElementById("header-menu");
    if (x.className === "header-menu") {
        x.className += " responsive";
    }
    else {
        x.className = "header-menu";
    }
}

// function initMap() {
//     var uluru = {lat: 43.2307761, lng: 76.881341};
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 5, center: uluru}
//     );
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }
