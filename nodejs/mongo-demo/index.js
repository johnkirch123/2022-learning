const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://johnkirch:123@nodejs.ktwnm.mongodb.net/playground?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MongoDB...');
  })
  .catch((err) => console.log(new Error('Could not connect to MongoDB...')));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['angular', 'frontend'],
    isPublished: true
  });

  const result = await course.save();

  console.log(`${result} saved...`);
}

const getCourses = async () => {
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)

  // or
  // and

  const result = await Course
    // .find({ author: 'Mosh', isPublished: true })
    // .find({ price: { $gte: 10, $lte: 20 } })
    // .find({ price: { $in: [10, 15, 20] } })
    // .find()
    // .or([{ author: 'Mosh' }, { isPublished: true }])
    // .and()

    // Starts with
    // .find({ author: /^Mosh/ })
    // Ends with
    // .find({ author: /Hamedani$/i })

    // Contains
    .find({ author: /.*Mosh.*/ })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(result);
};

getCourses();

// createCourse();
