const faker = require('faker');
const mongoose = require('mongoose');

const { Review } = require('./dbconnector.js');

Review.collection.drop((err) => {
  if (err) {
    console.log('err');
    mongoose.connection.close();
    return;
  }
  console.log('data dropped');
  mongoose.connection.close();
});

const user = [];

for (let i = 0; i < 100; i++) {
  let tempResturant = {};
  tempResturant['rest_id'] = i + 1;
  const numRev = faker.random.number({ min: 1, max: 100 });
  let tempArr = [];
  for (let j = 0; j < numRev; j += 1) {
    const userInfo = {
      name: faker.name.findName(),
      location: `${faker.address.city()} ${faker.address.stateAbbr()}`,
      numFriends: faker.random.number({ min: 1, max: 500 }),
      numReviews: faker.random.number({ min: 1, max: 500 }),
      numPhotos: faker.random.number({ min: 1, max: 501 }),
      elite: faker.random.boolean(),
      stars: faker.random.number({ min: 1, max: 5 }),
      date: faker.date.between('01-31-2015', '01-31-2019'),
      comments: faker.lorem.sentences(7),
      userPicture: faker.image.avatar(),
      checkIn: faker.random.boolean(),
    };
    tempArr.push(userInfo);
  }
  tempResturant['reviews'] = tempArr;
  user.push(tempResturant);
}
console.table(user);

Review.insertMany(user, (error) => {
  if (error) {
    console.log('error', error);
    mongoose.connection.close();
  } else {
    console.log('sucessfully seededs');
    mongoose.connection.close();
  }
});
