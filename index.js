const express=require('express'),
  morgan=require('morgan'),
  fs=require('fs'),
  path=require('path');

const app=express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));

let movies = [
  {
      title: 'Predator',
      director: 'John McTiernan'
  },
  {
      title: 'Commando',
      director: 'Mark L. Lester'
  },
  {
      title: 'Lethal Weapon',
      director: 'Richard Donner'
  },
  {
      title: 'Die Hard',
      director: 'John McTiernan'
  },
  {
      title: 'Ghostbusters',
      director: 'Ivan Reitman'
  },
  {
      title: 'The Burbs',
      director: 'Joe Dante'
  },
  {
      title: 'Big',
      director: 'Penny Marshall'
  },
  {
      title: 'Flight of the Navigator',
      director: 'Randal Kleiser'
  },
  {
      title: 'Alien',
      director: 'Ridley Scott'
  },
  {
      title: 'Aliens',
      director: 'James Cameron'
  },
  {
      title: 'The Abyss',
      director: 'James Cameron'
  },
];

app.get('/',(req,res)=>{
  res.send("Welcome to myFlix Movie App!");
});

app.get('/movies',(req,res)=>{
    res.json(movies);
});


//serving static files
app.use(express.static('public'));


//error-handling middleware library
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(8080,()=>console.log("app is listening on port 8080"));