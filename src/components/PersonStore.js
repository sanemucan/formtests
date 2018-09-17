import { observable } from 'mobx';

// let's create an observable person

var person = observable({
  fullName: 'Sanem Ucan',
  job: 'Engineer',
  email: 'sanemucan@gmail.com',
  address: {
    city: 'Jersey City',
    zipCode: '07302',
    street: '18 Park View'
  }
});
