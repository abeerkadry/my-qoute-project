
var arrayQuotes = [
  {
    'writer': '--Frank Sinatra', 
  'quote': 'The best revenge is massive success.'
 },
  {
    'writer': 'Jim Rohn', 
   'quote': 'Beware of what you become in pursuit of what you want.'
  },
  {
    'writer': 'Epictetus', 
   'quote': 'It\'s not what happens to you, but how you react to it that matters.'
  },
  {
    'writer': 'Wayne Gretzy', 
   'quote': 'You miss 100% of the shots you don\'t take.'
  },
  {
    'writer': 'Nelson Mandela', 
   'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
  },
  {
    'writer': 'Elbert Hubbard', 
   'quote': 'Do not take life too seriously. You will not get out alive.'
  },
];



  function generateQuote(){
    var random = Number.parseInt(Math.random()*arrayQuotes.length + 1);
    document.getElementById('quote').innerHTML = ` "${arrayQuotes[random].quote}" `;
    document.getElementById('writerQuote').innerHTML = `--${arrayQuotes[random].writer}`;
    
  }


