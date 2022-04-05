// Reversing letters and words
// i/n:- "emocleW ot SJ ni nialP hsilgnE"
// o/p:-Welcome to JS in Plain English
const str = "emocleW ot SJ ni nialP hsilgnE";
console.log('---------------------------------------------------- 1st -----------------------------');

console.log('1 ----------> ', str.split(' ').map(item => item.split('').reverse().toString().replaceAll(',', '')).toString().replaceAll(',', ' '))




























//  Sorting an array of strings by length
//  Input : ["You", "are", "beautiful", "looking"]
// Output : [“You", "are", "looking", "beautiful"]
console.log('-------------------------------------------------------- 2nd --------------------------------------');
const arrStr = ["You", "are", "beautiful", "looking"];
console.log('2 ----------> ', arrStr.sort((a, b) =>
    a.length - b.length
))


// Checking that a string contains a substring Solutions
// input:I love you so much!
// return : true/false
const str3 = "I love you so much!";
console.log('3 -------->', str3.includes('Love'));

// Let’s take a number 12345678 and the masking character is *. only use(.slice() method)
//  Input : 12345678
//  Output: ******78

const str4 = 123456789123;
var str4z = str4.toString();
console.log('4 ----------> ', str4z.slice(0, -2).replace(/./g, '*') + str4z.slice(-2));





// <!-- *********************************** -->
// Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

// Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

// Generate 3 capital letters from the surname, if it has:

// At least 3 consonants then the first three consonants are used. (Newman -> NWM).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
// Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
// Generate 3 capital letters from the name, if it has:

// Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
// More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
// Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

// Take the last two digits of the year of birth (1985 -> 85).
// Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
// For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
// For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

// const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
// 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

// Examples
// fiscalCode({
//   name: "Matt",
//   surname: "Edabit",
//   gender: "M",
//   dob: "1/1/1900"
// }) ➞ "DBTMTT00A01"

// fiscalCode({
//   name: "Helen",
//   surname: "Yu",
//   gender: "F",
//   dob: "1/12/1950"
// }) ➞ "YUXHLN50T41"

// fiscalCode({
//   name: "Mickey",
//   surname: "Mouse",
//   gender: "M",
//   dob: "16/1/1928"
// }) ➞ "MSOMKY28A16"
const surName = () => { 
    
}

const fiscalCode = ({ name, surname, gender, dob }) => {
    console.log('name :', name, 'surname :', surname, 'gender :', gender, 'DOB :', dob);
    const tempSurName = []
    const firstVowel = []

    // const tempName = []
    // for (let index = 0; index < name.length; index++) {
    //     if (!['A', 'E', 'I', 'O', 'U'].includes(name[index].toUpperCase())) {
    //         tempName.push(name[index]);
    //     }
    // }
    // const halfName = tempName.toString().replaceAll(',', '').toUpperCase();

    // if (halfName.length > 3) {
    //     if (halfName.length == 2) {
    //         return halfName.concat('X')
    //     }
    //     return halfName.slice(0,1)+halfName.slice(2,4)
    // }
    // if (halfName.length === 3) {
    //     return halfName
    // }


    for (let index = 0; index < surname.length; index++) {
        if (!['A', 'E', 'I', 'O', 'U'].includes(surname[index].toUpperCase())) {
            tempSurName.push(surname[index]);
        }
    }
    if (tempSurName.length < 3) {
        for (let index = 0; index < surname.length; index++) {
            if (['A', 'E', 'I', 'O', 'U'].includes(surname[index].toUpperCase())) {
                firstVowel.push(surname[index]);
            }
        }
        const halfSur = ((tempSurName.toString().replaceAll(',', '').toUpperCase().concat(tempSurName.length == 1 ? firstVowel[0].toString() + firstVowel[1].toString() : firstVowel[0].toString())).toUpperCase())

        if (halfSur.length == 2) {
            return halfSur.concat('X')
        }
        
        return halfSur
    }
    if (tempSurName.length = 3) {
        return tempSurName.toString().replaceAll(',', '').toUpperCase();
    }


}

console.log('-------------------------------- last -------------------------------------');
console.log(fiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
}))

console.log(fiscalCode({
    name: "Helen",
    surname: "Hoe",
    gender: "F",
    dob: "1/12/1950"
}))
console.log(fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
}))


// function fiscalCode(person) {
//     const months = ' ABCDEHLMPRST';
//     console.log('months -> ',months);
//     const getV = s => s.toUpperCase().replace(/[^AEIOU]/g, '');
//     console.log('getV -> ', getV);
    
//     const getC = s => s.toUpperCase().replace(/[AEIOU]/g, '');
//     console.log('getC -> ', getC);
    
//     const code = s => (getC(s) + getV(s) + 'XXX').slice(0, 3);
//     console.log('code -> ', code);
    
//     const [d, m, y] = person.dob.split('/');
//     console.log('[d, m, y] -> ',[d, m, y]);

//     let sCode = code(person.surname);
//     console.log('sCode -> ',sCode);
//     let fCon = getC(person.name);
//     console.log('fCon -> ',fCon);
//     let fCode = fCon.length > 3 ? fCon[0] + fCon[2] + fCon[3] : code(person.name);
//     console.log('fCode -> ',fCode);
// 	let nCode = y.slice(-2) + months[m] + (person.gender === 'M' ? ('0'+d).slice(-2) : +d+40);
// 	console.log(sCode + fCode + nCode)
// }

