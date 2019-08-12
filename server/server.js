const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = process.env.PORT || 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

app.post('/jokes', (req, res) => {
  console.log('POST:', req.body);
  const newJokeObject = {
    whoseJoke: req.body.whoseJoke,
    jokeQuestion: req.body.jokeQuestion,
    punchLine: req.body.punchLine,
  }
  jokes.push(newJokeObject);
  console.log(jokes);
  res.send('Recieved joke!')

});

app.get('/jokes', (req, res) => {
  console.log ('GET');
  res.send(jokes);
});

// serve back static files
app.use(express.static('server/public'));

app.listen(PORT, function(){
  console.log('server running on: ', PORT);
}); // end spin up server
