function countLetters (str) {
  // Creating a new object
  var uniqueCharacters = {

  }

  // Cutting out the whitespace
  var noSpaces = str.split(" ");
  var string = noSpaces.join("");

  // Loops through the string and returns index positions
  for (var i = 0; i < string.length; i++) {
    // Takes the value at the current index position
    var currentLetter = string[i];

    // Does my currentLetter exists as a property yet?
    if (uniqueCharacters[currentLetter]) {
      // If yes, push the current value of i into the array
      uniqueCharacters[currentLetter].push(i);
    } else {
      // If no, create an array with a property key of whatever letter I'm on with the value of my index pos
      uniqueCharacters[currentLetter] = [i];
    }

  };

  console.log(uniqueCharacters);

}

countLetters("lighthouse in the house");