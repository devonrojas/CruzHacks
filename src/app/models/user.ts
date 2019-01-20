export interface User {
  displayName: string,
  email: string,
  phone: string,
  uid: string,
  gender: string,
  channels: string,
  location: {
    street: string,
    city: string,
    state: string,
    zip: string
  },
  party: string,
  age: number,
  ethinicity: string,
  accountType: {
    citizen: boolean,
    politician: boolean
  },
  occupation: string
}
