const faker = require("faker");

console.log(faker.lorem.sentences((min = 1), (max = 5)));
var user = [];

for (let i = 0; i < 2; i++) {
  let userInfo = {
    resturantId: i,
    name: faker.name.findName(),
    location: faker.address.city(),
    numFriends: faker.random.number({ min: 1, max: 500 }),
    numReviews: faker.random.number({ min: 1, max: 500 }),
    numPhotos: faker.random.number({ min: 1, max: 500 }),
    elite: faker.random.boolean(),
    stars: faker.random.number({ min: 1, max: 500 }),
    date: faker.date.between("2015-01-01", "2019-01-05"),
    comments: faker.lorem.sentences((min = 5), (max = 30)),
    userPicture: faker.image.avatar(),
    checkIn: faker.random.boolean()
  };
  user.push(userInfo);
}
console.log(user);
