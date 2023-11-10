import { Icon, Marker, layerGroup } from 'leaflet';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

import useMap from '../hooks/useMap';
import { LocationType } from '../../const';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { PointData } from '../../const';

type MapProps = {
  block: string;
  location: LocationType;
  selectedPoint: string;
};

function Map({ location, block, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      PointData.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, PointData, selectedPoint]);
  return <section className={`${block}__map map`} ref={mapRef}></section>;
}

export default Map;
