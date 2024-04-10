import { faker } from '@faker-js/faker'

interface AttendeeProps {
  id: string;
  name: string;
  email: string;
  subscribedAt: Date;
  checkedInAt: Date;
}

export const attendees = Array.from({ length: 216 }).map(():AttendeeProps => {
  return {
    id: faker.string.numeric({ length: 6 }),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    subscribedAt: faker.date.recent({ days: 30 }),
    checkedInAt: faker.date.recent({ days: 7 }),
  };
});