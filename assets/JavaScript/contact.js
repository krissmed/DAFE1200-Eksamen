src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByntpaneUyWub5IiBZZn9NxqlY-K4ZgU4&callback=initMap&libraries=&v=weekly"
      
    
      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const p35 = { lat: 59.919185, lng: 10.7353701 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: p35,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: p35,
          map: map,
        });
      }





/*
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    /*this.classList.toggle("active");*/

    /* Toggle between hiding and showing the active panel */
   /* var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}*/
