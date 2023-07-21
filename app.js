// aviation word list: https://www.linkedin.com/pulse/100-most-common-aviation-english-words-used-pilots-petter-zugaib/

const wordList = {
    aviation: ["jumpseat","groundcontrol","altitude","waypoint","visibility","velocity","vector","unicom","turbulence","transponder","tower","thrust","takeoff","runway","range","radar","navigation","missedapproach","maneuver","jetway","groundspeed","glide","fuel","flaps","elevation","descent","crosswind","cockpit","birdstrike","beacon","autopilot","airspeed","accelerate"]
}


function getWord (words) {
    console.log(words)
    const wordIndex = Math.floor(Math.random() * words.length)
    const word = words[wordIndex];
    return word
}
const word = getWord(wordList.aviation);




function setLetter(letter) {
    //check if letter is in word, 
    console.log(letter)
    let tableClass = ' '
    if (word.includes(letter.toLowerCase())){
         tableClass = "correct-letter" 
    } else {
         tableClass = "incorrect-letter"
    } 
    const tableRow = createTablerow(tableClass, letter)
    document.getElementById("used-letters").appendChild(tableRow)

}

    function createTablerow (tableClass, letter) {
        const rowEl = document.createElement("tr")
        const dataTableEl = document.createElement("td")
        dataTableEl.innerText = letter
        dataTableEl.className = tableClass
        rowEl.appendChild(dataTableEl)
        return rowEl
    } 

    createTablerow('test', 'V')
    //set a variable for the class based on correct or not.
    //create a table row and TD(table data)
    //add a row to the table
    // if correct add class correct and guess anther letter, and if incorrect red
       // display (correct guess or incorrect guess)
//     document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + letter;


