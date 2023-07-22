// aviation word list: https://www.linkedin.com/pulse/100-most-common-aviation-english-words-used-pilots-petter-zugaib/

const wordList = {
    aviation: ["jumpseat","altitude","waypoint","visibility","velocity","vector","unicom","turbulence","transponder","tower","thrust","takeoff","runway","range","radar","navigation","maneuver","jetway","groundspeed","glide","fuel","flaps","elevation","descent","crosswind","cockpit","birdstrike","beacon","autopilot","airspeed","accelerate"]
}

let count = 1
let numLetters = 0
let guessedLetters = []
let gameover = false

function getWord (words) {
    console.log(words)
    const wordIndex = Math.floor(Math.random() * words.length)
    const word = words[wordIndex];
    return word
}
let word = getWord(wordList.aviation);
console.log(word)
let guess = "";

// the empty dashes
for (let i = 0; i < word.length; i ++) {
    document.getElementById("word").innerHTML += "-"
    guess += "-"
}


function setLetter(letter) {
    if (!guessedLetters.includes(letter) && !gameover) {

    
    //check if letter is in word, 
    console.log(letter)
    guessedLetters.push(letter)
    let tableClass = ' '
    if (word.includes(letter.toLowerCase())){
         tableClass = "correct-letter"
          let index = word.indexOf(letter.toLowerCase())
          console.log(index)
          while (index != -1) {
            guess = guess.substring(0, index) + letter.toLowerCase() + guess.substring(index + 1)
            console.log(guess)
            document.getElementById("word").innerHTML = guess
            word = word.substring(0, index) + "-" + word.
            substring(index + 1)
            console.log(word)
            numLetters ++
            index = word.indexOf(letter.toLowerCase())
            console.log(index)
          }

          if (numLetters == word.length) {
            document.getElementById("message").innerText = "You guessed the word correctly. You Won!"
            gameover = true;
          }
    } else {
         tableClass = "incorrect-letter"
         if (count <= 6) {
            let starship = document.getElementById("starship")
            let img = document.createElement("img")
            img.src="STARSHIP/PART" + count + ".png"
            count ++;
           starship.appendChild(img)
           if (count == 7) {
            document.getElementById("message").innerText = "You are out of tries, Game Over!"
            gameover = true;
           }
         } 
    } 
    const tableRow = createTablerow(tableClass, letter)
    document.getElementById("used-letters").appendChild(tableRow)
    }
}

    function createTablerow (tableClass, letter) {
        const rowEl = document.getElementById(tableClass)
        const dataTableEl = document.createElement("td")
        dataTableEl.innerText = letter
        dataTableEl.className = tableClass
        rowEl.appendChild(dataTableEl)
        return rowEl
    } 

function reset () {
 count = 1
 numLetters = 0
 guessedLetters = []
 gameover = false
 document.getElementById("message").innerText = ""


word = getWord(wordList.aviation);
console.log(word)
guess = "";
document.getElementById("word").innerHTML = ""
// the empty dashes
for (let i = 0; i < word.length; i ++) {
    document.getElementById("word").innerHTML += "-"
    guess += "-"
}

let rowEl = document.getElementById("correct-letter")
while (rowEl.firstChild) {
    rowEl.removeChild(rowEl.firstChild)
}
let dataTableEl = document.createElement("th")
dataTableEl.innerText = "ORBIT CORRECT LETTERS"
dataTableEl.className = "correct-letters"
rowEl.appendChild(dataTableEl)

rowEl = document.getElementById("incorrect-letter")
while (rowEl.firstChild) {
    rowEl.removeChild(rowEl.firstChild)
}
dataTableEl = document.createElement("th")
dataTableEl.innerText = "ORBIT INCORRECT LETTERS"
dataTableEl.className = "incorrect-letters"
rowEl.appendChild(dataTableEl)

rowEl = document.getElementById("starship")
while (rowEl.firstChild) {
    rowEl.removeChild(rowEl.firstChild)
}
}

