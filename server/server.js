var express = require('express')
    , bodyParser = require('body-parser');

var app = express();

let courses = [
    {
        id: 1,
        title: 'Video course',
        creatingDate: 486766800000,
        duration: 90,
        description: `Lorem ipsum dolor sit amed,onsectetur adipiscing elit. Donec volutpat enim eu interdum semper.
    Phasellus non turpis ut mauris fringilla ornare non non dolor. Integer ac odio nec orci l
    uctus consectetur pretium sed turpis. Vivamus non metus vehicula purus vulputate blandit in interdum eni
    m. Donec ut metus hendrerit, commodo mauris et, convallis justo. Etiam condimentum ex neque. Nullam portt
    itor pretium imperdiet. Sed eget lobortis nisl, ultricies mollis lacus. `,
        topRated: true
    },
    {
        id: 2,
        title: 'Online course',
        creatingDate: 979250400000,
        duration: 210,
        description: `Aenean cursus efficitur nulla, quis venenatis sapien viverra non. Curabitur sollicitudin
    vitae libero in sagittis. Mauris semper, sapien et pharetra interdum, erat leo aliquam nibh, vel egestas
    enim ligula vel arcu. Etiam libero justo, dignissim et orci a, auctor egestas erat.
     Donec ultrices fermentum ultricies. Curabitur vel lectus placerat, rhoncus risus vitae, congue purus
     Sed luctus nulla turpis, vel commodo nisl venenatis at. . `,
      topRated: false
    },
    {
        id: 3,
        title: 'In class course',
        creatingDate: 1510437600000,
        duration: 45,
        description: `Mauris at pellentesque leo. Quisque tempor porttitor tortor, et rutrum elit egestas ultricies
    . Sed aliquam molestie mi, vel ornare erat. Vestibulum cursus nisi quam, ut
    fringilla libero molestie sed. Donec eu nisi et enim eleifend posuere. Fusce
    sem metus, viverra vel odio in, mattis laoreet arcu. Pellentesque venenatis mollis ex id porta`,
      topRated: true
    },
    {
      id: 4,
      title: 'Future course',
      creatingDate: 1519997600000,
      duration: 88,
      description: `Curabitur vel lectus placerat, rhoncus risus vitae, congue purus
     Sed luctus nulla turpis, vel commodo nisl venenatis at.`,
      topRated: false
    },
  {
    id: 5,
    title: 'Fresh course',
    creatingDate: 1511193306780,
    duration: 45875,
    description: `rhoncus risus vitae, congue purus
     Sed luctus nulla turpis, vel commodo nisl venenatis at.`,
    topRated: false
  },
];

const users = [
    { name: 'John', username: 'a', password: '1'},
    { name: 'Bill', username: 'b', password: '2'}
];

const defaultUser = {
  name: 'Default User',
  isLogined: false
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/login', function(request, response){
    console.log(request.body);
    const username = request.body.username;
    const password = request.body.password;
    console.log(username, password, password, users[0].password);
    const loginedUser = users.find(user => user.username === username && user.password === password);

    console.log(loginedUser);

    if(loginedUser) {
        response.send({
            name: loginedUser.name,
            isLogined: true
        });
    } else {
        response.status(401).send(defaultUser);
    }
});

app.get('/courses', function(request, response) {
    console.log('get courses');
    response.status(200).send(courses);
});

app.get('/delete-course/:id', function(request, response) {
    const id = +request.params.id;
    courses = courses.filter(param => param.id !== id);
    response.status(200).send(courses);
});

app.get('/get-course/:id', function(request, response) {
  const id = +request.params.id;
  const course = courses.find(course => course.id === id);
  course ? response.status(200).send(course) : response.status(404).send('Not found');
});

app.post('/add-course', function (request, response) {
  const course = request.body;
  courses = courses.filter(item => item.id === course.id).push(course);
  response.status(200).send(courses);
});




app.listen(1337);
