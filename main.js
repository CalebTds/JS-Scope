const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord
}

const result = conjunction("Master", "Card")
console.log(result)

    const modSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })

console.log(HTMLRepresentation)

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
for (const location of locations) {
    if (location[0] > 2) {
        console.log("This location is invalid")
    }
}