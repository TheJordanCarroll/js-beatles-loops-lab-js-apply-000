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

console.log(theBeatlesPlay(musicians, instruments));

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(arrayFacts) {
  let i;
  while (i < arrayFacts.length) {
    i++
   var info = `${arrayFacts[i]}!!!`
   results.push(info);
  } 
  return arrayFacts;
} 

console.log(johnLennonFacts(facts));

// svar musicians = []
// var instruments = []

// function theBeatlesPlay {}

// var musicians = []

// for (let i = 0; i < 4; i++)


// var musicians, instruments;

// musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"];

// instruments = ["guitar", "bass", "drums", "guitar"]

// function theBeatlesPlay () {
  
// }