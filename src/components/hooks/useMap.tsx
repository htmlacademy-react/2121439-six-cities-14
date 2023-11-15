import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';

import { COPYRIGHT, LocationType } from '../../const';
import { TILE_LAYER } from '../../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: LocationType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: 10,
      });

      const layer = new TileLayer(TILE_LAYER, {
        attribution: COPYRIGHT,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}

export default useMap;
