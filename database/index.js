const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reviews", { useNewUrlParser: true });
const faker = require("faker");

let reviewSchema = mongoose.Schema({
  // restaurantId: Number,
  name: String,
  location: String,
  numFriends: Number,
  numReviews: Number,
  numPhotos: Number,
  elite: Boolean,
  stars: Number,
  date: Date,
  comments: String,
  userPicture: String,
  checkIn: Boolean
});
const Review = mongoose.model("Review", reviewSchema);

let user = [];

for (let i = 0; i < 5; i++) {
  let userInfo = {
    // restaurantId: i,
    name: faker.name.findName(),
    location: `${faker.address.city()} ${faker.address.stateAbbr()}`,
    numFriends: faker.random.number({ min: 1, max: 500 }),
    numReviews: faker.random.number({ min: 1, max: 500 }),
    numPhotos: faker.random.number({ min: 1, max: 501 }),
    elite: faker.random.boolean(),
    stars: faker.random.number({ min: 1, max: 5 }),
    date: faker.date.between("01-31-2015", "01-31-2019"),
    comments: faker.lorem.sentences(7),
    userPicture: faker.image.avatar(),
    checkIn: faker.random.boolean()
  };
  user.push(userInfo);
}

Review.insertMany(user, function(error) {
  if (error) {
    console.log("error", error);
  } else {
    console.log("sucessfully seededs");
  }
});
var getComments = (restaurantId, callback) => {
  Review.findOne({}, (err, data) => {
    console.log(err, data);
  });
  Review.find({}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getComments = getComments;
