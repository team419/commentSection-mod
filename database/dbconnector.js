const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true });

const reviewSchema = mongoose.Schema({
    rest_id: Number,
    reviews: Array,
});
const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review };