// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
function FindIntersection(strArr) {
    let fEle = strArr[0].split(',')
    let sEle = strArr[1].split(',')
    let fStr = []
    for (let index = 0; index < fEle.length; index++) {
        for (let ind = index; ind < sEle.length; ind++) {
            if (fEle[index] === sEle[ind]) {
                fStr.push(fEle[index]);
            }
        }
    }
    return fStr.join(',');
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))