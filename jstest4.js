const arr = ["hetal", "kiran", "shila", "bigscal", "trainees", "abcdefd","abcdefd89",'abcdefd789']


const tempArr = [];


const checkUniqe = (valLen, i) => {
    const tempr = []
    console.log('valLen----', valLen, 'i ----', i);
    for (let i = 0; i < arr.length; i++) {
        if ((valLen === arr[i].length)) {
            tempr.push(i)
        }
    }

    if (tempr.length < 2) {
        tempArr.push(...tempr)
    }
    console.log('temp ', tempr);
}
for (let index = 0; index < arr.length; index++) {
    checkUniqe(arr[index].length, index)
}
// const finalArr = [];

console.log('finalArr -    ',tempArr.map((value) => (arr[value])));