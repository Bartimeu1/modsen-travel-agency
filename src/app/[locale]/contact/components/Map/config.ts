import { IMapMarker } from './types';

export const mapMarkers: IMapMarker = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [27.5615, 53.9045],
      },
      properties: {
        title: 'Mapbox',
        description: 'Minsk, Belarus',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [21.0122, 52.2297],
      },
      properties: {
        title: 'Mapbox',
        description: 'Warsaw, Poland',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [25.2797, 54.6872],
      },
      properties: {
        title: 'Mapbox',
        description: 'Vilnius, Lithuania',
      },
    },
  ],
};
