'use strict';

const mongoose = require('mongoose');


//Blog Schema
const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: {
    firstName: String,
    lastName: String
  },
  content: { type: String, required: true },
});

//Blog Virtuals


// *virtuals* (http://mongoosejs.com/docs/guide.html#virtuals)
// allow us to define properties on our object that manipulate
// properties that are stored in the database. Here we use it
// to generate a human readable string based on the address object
// we're storing in Mongo.
// restaurantSchema.virtual('addressString').get(function() {
//   return `${this.address.building} ${this.address.street}`.trim()});

// // this virtual grabs the most recent grade for a restaurant.
// restaurantSchema.virtual('grade').get(function() {
//   const gradeObj = this.grades.sort((a, b) => {return b.date - a.date})[0] || {};
//   return gradeObj.grade;
// });

// this is an *instance method* which will be available on all instances
// of the model. This method will be used to return an object that only
// exposes *some* of the fields we want from the underlying data


//Blog create and export model to be used in server.js


blogSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    author: this.author,
    content: this.content,
  };
};

const Blog = mongoose.model('Blog', blogSchema);


// module.exports = {Restaurant};
module.exports = { Blog };