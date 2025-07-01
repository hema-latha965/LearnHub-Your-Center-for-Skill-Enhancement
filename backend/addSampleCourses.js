// Script to add multiple sample courses to the database
const mongoose = require('mongoose');
const courseSchema = require('./schemas/courseModel');
require('dotenv').config();

async function addSampleCourses() {
  await mongoose.connect(process.env.MONGO_DB, {
    dbName: 'video-course-application',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const courses = [
    {
      userId: 'sample-user-id-1',
      C_educator: 'John Doe',
      C_title: 'Sample React Course',
      C_categories: 'IT & Software',
      C_price: 'free',
      C_description: 'A beginner friendly React course.',
      sections: [
        { S_title: 'Introduction', S_content: { filename: '', path: '' }, S_description: 'Welcome to the course!' },
        { S_title: 'React Basics', S_content: { filename: '', path: '' }, S_description: 'Learn the basics of React.' }
      ],
      enrolled: 0
    },
    {
      userId: 'sample-user-id-2',
      C_educator: 'Jane Smith',
      C_title: 'Python for Beginners',
      C_categories: 'IT & Software',
      C_price: 'free',
      C_description: 'Start your Python journey here.',
      sections: [
        { S_title: 'Getting Started', S_content: { filename: '', path: '' }, S_description: 'Introduction to Python.' },
        { S_title: 'Variables', S_content: { filename: '', path: '' }, S_description: 'Understanding variables.' }
      ],
      enrolled: 0
    },
    {
      userId: 'sample-user-id-3',
      C_educator: 'Alex Lee',
      C_title: 'Finance 101',
      C_categories: 'Finance & Accounting',
      C_price: 'free',
      C_description: 'Basics of finance and accounting.',
      sections: [
        { S_title: 'Finance Basics', S_content: { filename: '', path: '' }, S_description: 'Learn the basics of finance.' },
        { S_title: 'Accounting Principles', S_content: { filename: '', path: '' }, S_description: 'Introduction to accounting.' }
      ],
      enrolled: 0
    }
  ];

  await courseSchema.insertMany(courses);
  console.log('Sample courses added!');
  mongoose.disconnect();
}

addSampleCourses();
