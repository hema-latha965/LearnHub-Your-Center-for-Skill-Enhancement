// Script to add a sample course to the database
const mongoose = require('mongoose');
const courseSchema = require('./schemas/courseModel');
require('dotenv').config();

async function addSampleCourse() {
  await mongoose.connect(process.env.MONGO_DB, {
    dbName: 'video-course-application',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const course = new courseSchema({
    userId: 'sample-user-id',
    C_educator: 'John Doe',
    C_title: 'Sample React Course',
    C_categories: 'IT & Software',
    C_price: 'free',
    C_description: 'A beginner friendly React course.',
    sections: [
      {
        S_title: 'Introduction',
        S_content: { filename: '', path: '' },
        S_description: 'Welcome to the course!'
      },
      {
        S_title: 'React Basics',
        S_content: { filename: '', path: '' },
        S_description: 'Learn the basics of React.'
      }
    ],
    enrolled: 0
  });

  await course.save();
  console.log('Sample course added!');
  mongoose.disconnect();
}

addSampleCourse();
