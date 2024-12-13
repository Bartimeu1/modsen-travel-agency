export interface BaseSendMailPayload {
  [key: string]: string;
}

export interface BookingSendMailPayload {
  location: string;
  roomType: string;
  person: string;
  checkIn: Date;
  checkOut: Date;
  name: string;
  email: string;
}
