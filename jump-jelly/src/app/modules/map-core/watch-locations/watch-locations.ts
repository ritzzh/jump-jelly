import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import maplibregl, { Map, Marker } from 'maplibre-gl';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-watch-locations',
  imports: [],
  templateUrl: './watch-locations.html',
  styleUrl: './watch-locations.scss'
})
export class WatchLocations {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  map!: Map;
  markers: Marker[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      console.log("is returning")
      return; // SSR protection
    }

    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=uoGKddW6vUlPtzcTSXSJ`,
      center: [77.5946, 12.9716],
      zoom: 5
    });

    console.log("initiating map")

    this.map.addControl(new maplibregl.NavigationControl());
  }

  addLocation(location: string): void {
    const coords = location.split(',').map(Number);
    if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
      const [lat, lng] = coords;
      const marker = new maplibregl.Marker().setLngLat([lng, lat]).addTo(this.map);
      this.markers.push(marker);
      this.map.flyTo({ center: [lng, lat], zoom: 10 });
    } else {
      alert('Enter coordinates as "latitude,longitude"');
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
