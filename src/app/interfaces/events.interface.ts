export interface Attendee {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  date: Date;
  time: string;
  capacity: number;
  image: string;
  isArchived: boolean;
  attendees: Attendee[];
}
