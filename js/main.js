// To track the selected random variable
var selectedValues = [];

function quotes(){
var aquote = new Array;
aquote[0]='Time is on our side.';
aquote[1]="So many books, so little time.";
aquote[2]="A room without books is like a body without a soul. ";
aquote[3]="Be the change that you wish to see in the world. ";
aquote[4]="If you tell the truth, you don't have to remember anything";

var aquoteName = new Array;
aquoteName[0]='John Mervish';
aquoteName[1]=" ― Frank Zappa";
aquoteName[2]="-Marcus Tullius Cicero";
aquoteName[3]="― Mahatma Gandhi";
aquoteName[4]="― Mark Twains";

 rdmQuote = Math.floor(Math.random()*aquote.length);

 // Check if the value has already been selected before
 while (selectedValues.includes(rdmQuote)) {
    // If yes, generate a new random value
    rdmQuote = Math.floor(Math.random()*aquote.length);
  }
  // Add the new value to the selectedValues array for not be selceted again
  selectedValues.push(rdmQuote);

  document.getElementById("txtbox") .value=aquote[rdmQuote];
  document.getElementById("txtbox2") .value=aquoteName[rdmQuote];

}


 