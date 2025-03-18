import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Property {
  id: number;
  propertyName: string;
  location: string;
  country: string;
  propertyType: string;
  ticketPrice: string;
  currentPrice: string;
  totalShares: string;
  yourShares?: number;
  originalTicketPrice: string;
  latitude: number;
  longitude: number;
}

interface MapboxProps {
  dummyData: Property[];
}

const Mapbox: React.FC<MapboxProps> = ({ dummyData }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [spinEnabled] = useState(true);
  let userInteracting = false;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFudWFyZXJhYSIsImEiOiJjbHVua3JhcHAxNjRkMmpwN2p1a2VwcTZlIn0.M7SLaBn_r3ldw0KuawrZbA";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-74.5, 40], // Default center position
      zoom: 1, // Default zoom
      maxZoom: 15,
      projection: "globe",
    });

    dummyData.forEach((property) => {
      const { latitude, longitude, propertyName, yourShares } = property;

      if (!latitude || !longitude) {
        console.error(`Invalid coordinates for ${propertyName}`);
        return;
      }

      const el = document.createElement("div");
      el.className = "custom-marker";
      el.innerHTML = `
        <div class="marker-content bg-black text-white p-2 rounded-lg text-sm">
          <strong>${propertyName}</strong>
          ${yourShares ? `<br /><span>${yourShares} shares</span>` : ""}
        </div>
      `;

      new mapboxgl.Marker(el)
        .setLngLat([longitude, latitude])
        .addTo(mapRef.current!);
    });

    const spinGlobe = () => {
      if (!mapRef.current || !spinEnabled || userInteracting) return;
      const zoom = mapRef.current.getZoom();
      const maxSpinZoom = 5;
      const slowSpinZoom = 3;
      let distancePerSecond = 360 / 60;

      if (zoom > slowSpinZoom) {
        const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
        distancePerSecond *= zoomDif;
      }

      const center = mapRef.current.getCenter();
      center.lng -= distancePerSecond;
      mapRef.current.easeTo({ center, duration: 1000, easing: (n) => n });

      mapRef.current.once("moveend", spinGlobe);
    };

    const stopSpinOnInteraction = () => {
      userInteracting = true;
    };

    const resumeSpinAfterInteraction = () => {
      userInteracting = false;
      spinGlobe();
    };

    mapRef.current.on("mousedown", stopSpinOnInteraction);
    mapRef.current.on("mouseup", resumeSpinAfterInteraction);
    mapRef.current.on("dragend", resumeSpinAfterInteraction);
    mapRef.current.on("pitchend", resumeSpinAfterInteraction);
    mapRef.current.on("rotateend", resumeSpinAfterInteraction);

    spinGlobe();

    return () => {
      mapRef.current?.remove();
    };
  }, [dummyData, spinEnabled]);

  return <div ref={mapContainerRef} className="map-container w-full h-full rounded-xl" />;
};

export default Mapbox;
