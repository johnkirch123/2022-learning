const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required
  };

  const result = Joi.valid(req.body.name, schema);
  console.log(result);

  if (result.error) {
    res.status(400).send(result.error);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(course);
  res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send('The course with the given ID was not found');
  res.send(course);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listenening on port ${PORT}...`);
});
