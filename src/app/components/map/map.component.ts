import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import {google} from 'google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  title = "Angular-Google-Map ";
  map:google.maps.Map;;
  loader = new Loader({
    apiKey: "AIzaSyB57EY2N1mZBa20awOkgIimhXTVyIY6xWI",
    version: "weekly"
  });
  

  constructor() { }

  ngOnInit(): void {
    this.loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 7.523872, lng: 80.42123 },
        zoom: 8,
      });
    });
  }

}
