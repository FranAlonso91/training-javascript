const exercise5 = () => {
  let words;
  let chars;
  let input;
  let questions = {
    replace: null,
    capitalize: null,
    commas: null,
  };
  let sentence = prompt("Enter a sentence");

  do {
    input = prompt(`Replace chars by signs?\nY/n`);
    if (input == "y") {
      questions.replace = true;
    } else {
      questions.replace = false;
    }
  } while (input != "y" && input != "n");
  do {
    input = prompt(`Capitalize?\nY/n`);
    if (input == "y") {
      questions.capitalize = true;
    } else {
      questions.capitalize = false;
    }
  } while (input != "y" && input != "n");
  do {
    input = prompt(`Replace spaces with commas?\nY/n`);
    if (input == "y") {
      questions.commas = true;
    } else {
      questions.commas = false;
    }
  } while (input != "y" && input != "n");

  let timerStart = performance.now();
  stringManager(sentence, questions);
  // let timerEnd = performance.now() - timerStart;
  let timerEnd = performance.now();
  console.log(
    "%cWork done in:",
    "color: black; background-color: Green; font-weight: bold",
    timerEnd - timerStart,
    "ms"
  );

  // Main function
  function stringManager(sentence, questions) {
    console.log(
      "%cEntered sentence:",
      "color: black; background-color: Green; font-weight: bold"
    );
    console.log(sentence);
    if (questions.replace == true) {
      console.log(
        "%cChars replaced by signs:",
        "color: black; background-color: Green; font-weight: bold"
      );
      replace(sentence);
    }
    if (questions.capitalize == true) {
      console.log(
        "%cFirst letter of the word capitalized:",
        "color: black; background-color: Green; font-weight: bold"
      );
      capitalize(sentence);
    }
    if (questions.commas == true) {
      console.log(
        "%cSpaces replaced by commas:",
        "color: black; background-color: Green; font-weight: bold"
      );
      commas(sentence);
    }
    count(sentence);
    console.log(
      "%cWords:",
      "color: black; background-color: Green; font-weight: bold",
      words
    );
    console.log(
      "%cChars:",
      "color: black; background-color: Green; font-weight: bold",
      chars
    );
  }

  // Replace function
  function replace(sentence) {
    let replaceRule = {
      a: `@`,
      e: `3`,
      i: `1`,
      o: `0`,
      s: `$`,
    };
    let replaceResult = sentence.replace(/a|e|i|o|s/g, function (matched) {
      return replaceRule[matched];
    });
    console.log(replaceResult);
  }

  // Capitalize function
  function capitalize(sentence) {
    let capitalizeResult = sentence.split(" ");
    for (let i = 0; i < capitalizeResult.length; i++) {
      capitalizeResult[i] =
        capitalizeResult[i][0].toUpperCase() + capitalizeResult[i].substr(1);
    }
    capitalizeResult = capitalizeResult.join(" ");
    console.log(capitalizeResult);
  }

  // Commas function
  function commas(sentence) {
    let commasResult = sentence.replace(/,/g, "");
    commasResult = commasResult.replace(/ /g, ",");
    console.log(commasResult);
  }

  // Count function
  function count(sentence) {
    chars = sentence.length;
    words = sentence.split(" ").length;
  }
};