import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  query GetRooms($offset: Int!, $limit: Int!) {
    rooms(offset: $offset, limit: $limit) {
      items {
        id
        title
        price
        available
        rating
        reviews
        info
        image
      }
      totalCount
    }
  }
`;

export const GET_ROOMS_IDS = gql`
  query GetRoomsIds {
    roomsIds
  }
`;

export const GET_ROOM_BY_ID = gql`
  query GetRoomById($id: ID!) {
    roomById(id: $id) {
      title
      price
      available
      rating
      reviews
      info
      image
    }
  }
`;
