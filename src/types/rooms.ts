export interface Room {
  id: string;
  title: string;
  price: string;
  available: boolean;
  rating: number;
  reviews: number;
  info: string;
  image: string;
}

export interface RoomsData {
  rooms: {
    items: Room[];
    totalCount: number;
  };
}

export enum QueryApiNamesEnum {
  rooms = 'roomsApi',
  countries = 'countriesApi',
}

export interface RoomsIdsResponse {
  roomsIds: string[];
}

export interface RoomByIdResponse {
  roomById: Room;
}
