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
  clickToAddEnabled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=uoGKddW6vUlPtzcTSXSJ`,
      center: [77.5946, 12.9716],
      zoom: 5
    });

    this.map.addControl(new maplibregl.NavigationControl());

    this.map.on('click', (e) => {
      if (this.clickToAddEnabled) {
        const { lng, lat } = e.lngLat;
        this.addMarker(lat, lng, 'Custom Pin');
        this.clickToAddEnabled = false;
      }
    });
  }

  addLocation(input: string): void {
    const coords = input.split(',').map(Number);
    if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
      this.addMarker(coords[0], coords[1], 'Pinned');
    } else {
      alert('Use "latitude,longitude" format.');
    }
  }

  addMarker(lat: number, lng: number, title: string): void {
    const marker = new maplibregl.Marker()
      .setLngLat([lng, lat])
      .setPopup(new maplibregl.Popup().setText(title))
      .addTo(this.map);

    this.markers.push(marker);
    this.map.flyTo({ center: [lng, lat], zoom: 10 });
  }

  enableClickToAdd(): void {
    this.clickToAddEnabled = true;
    alert('Click on the map to place a custom pin.');
  }

  searchByPlace(place: string): void {
    // Use Nominatim API (OpenStreetMap geocoding)
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          this.addMarker(+lat, +lon, place);
        } else {
          alert('Place not found');
        }
      });
  }

  loadCsv(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const lines = (reader.result as string).split('\n');
      for (const line of lines) {
        const [latStr, lngStr, name] = line.trim().split(',');
        const lat = parseFloat(latStr);
        const lng = parseFloat(lngStr);
        if (!isNaN(lat) && !isNaN(lng)) {
          this.addMarker(lat, lng, name || 'CSV Pin');
        }
      }
    };
    reader.readAsText(file);
  }

  locateByIp(ip: string): void {
  const ipUrl = ip?.trim()
    ? `https://ipapi.co/${ip}/json/`
    : `https://ipapi.co/json/`;

  fetch(ipUrl)
    .then(res => res.json())
    .then(data => {
      const lat = parseFloat(data.latitude);
      const lng = parseFloat(data.longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        const label = data.city || data.country_name || 'IP Location';
        this.addMarker(lat, lng, `${label} (${ip || 'Your IP'})`);
      } else {
        alert('Could not determine location from IP');
      }
    })
    .catch(() => alert('Failed to fetch location info'));
}


  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
