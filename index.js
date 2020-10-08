// add solution here
var musicians, instruments;

musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"];

instruments = ["guitar", "bass", "drums", "guitar"]

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var results = []
  for (let i = 0; i < arrayMusicians.length; i++){
  var band = `${arrayMusicians[i]} plays ${arrayInstruments[i]}`
  results.push(band);
  }
  return results;
}

theBeatlesPlay(musicians, instruments);



// var musicians = []
// var instruments = []

// function theBeatlesPlay {}

// var musicians = []

// for (let i = 0; i < 4; i++)


// var musicians, instruments;

// musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"];

// instruments = ["guitar", "bass", "drums", "guitar"]

// function theBeatlesPlay () {
  
// }