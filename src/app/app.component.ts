import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'danferreira';
  lat: number = 43.2386344;
  lng: number = -79.7205817;

   // Used to toggle the menu on small screens when clicking on the menu button
   toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
   }

  //// Modal Image Gallery
  //onClick(element) {
  //  document.getElementById("img01").src = element.src;
  //  document.getElementById("modal01").style.display = "block";
  //  var captionText = document.getElementById("caption");
  //  captionText.innerHTML = element.alt;
  //}

}
