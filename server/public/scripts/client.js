let jokes = {
      whoseJoke: '',
      jokeQuestion: '',
      punchLine: ''
    };


$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

$('#addJokeButton').on('click', addNewJoke);

getJokes();
}

function addNewJoke (){
    jokes.whoseJoke = $('#whoseJokeIn').val();
    jokes.jokeQuestion = $('#questionIn').val();
    jokes.punchLine = $('#punchlineIn').val();

    postNewJoke();
// console.log(jokes);

$('#whoseJokeIn').val('');
$('#questionIn').val('');
$('#punchlineIn').val('');
}

function postNewJoke () {
    $.ajax({
        type: 'POST',
        url: '/jokes',
        data: jokes,
    })
    .then(function(response) {
        console.log(response);
        getJokes();
    
    });
}

function getJokes () {
    $.ajax ({
        type:'GET',
        url: '/jokes',
    })
    .then(function(response) {
        console.log(response)
        console.table(response);
        render(response);
    });
}

function render(jokesArray){
    if (jokesArray.length === 0) {
        return false;
    }

    const jokeList = $('#outputDiv');
    jokeList.empty();

    for (let joke of jokesArray) {
        jokeList.append(`
        <li>
         ${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}
        </li>
        `);
    }


}