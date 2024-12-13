'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import { MAPBOX_TOKEN } from '@root/config';
import { mapCenter, mapStyle, mapZoom } from '@root/constants';

import { mapMarkers } from './config';

import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './styles.module.scss';

export const Map = () => {
  const mapContainerRef = useRef(null);

  const addMarkersToMap = (map: mapboxgl.Map) => {
    for (const feature of mapMarkers.features) {
      const el = document.createElement('div');
      el.className = styles.marker;

      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    }
  };

  const createMap = (node: HTMLDivElement) => {
    const map = new mapboxgl.Map({
      container: node,
      accessToken: MAPBOX_TOKEN,
      style: mapStyle,
      center: mapCenter,
      zoom: mapZoom,
    });

    map.on('load', () => {
      addMarkersToMap(map);
    });

    return map;
  };

  useEffect(() => {
    const node = mapContainerRef.current;
    if (!node) {
      return;
    }

    const map = createMap(node);

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div ref={mapContainerRef} className={styles.map} />;
};
