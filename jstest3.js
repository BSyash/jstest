const vowelString = "we are trainees kop";
console.log('slpit ', vowelString.split(' '));
let count = 0;

vowelString.split(' ').map((item) => {
    if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {

        count = count + 1;
    }
}

)

// const temp = [];
// console.log('=========', vowelString.split('').map(item =>
//     item === ' ' ? temp.push('space') : null))
// console.log('count', temp.length);