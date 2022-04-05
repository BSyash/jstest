const vowelString = "we are trainees";
let count = 0;
for (let index = 0; index < vowelString.length; index++) {
    if (vowelString[index] === 'a' || vowelString[index] === 'e' || vowelString[index] === 'i'  ||  vowelString[index] === 'o' || vowelString[index] === 'u') {
        count = count + 1;
    }
    
}
console.log('count',count);