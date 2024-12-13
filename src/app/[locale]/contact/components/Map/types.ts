export interface IMapMarker {
  type: string;
  features: {
    type: string;
    geometry: {
      type: string;
      coordinates: [number, number];
    };
    properties: {
      title: string;
      description: string;
    };
  }[];
}
