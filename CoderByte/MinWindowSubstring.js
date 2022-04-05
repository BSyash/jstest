// Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
function MinWindowSubstring(strArr) {
    let subStr = []

    let nStr = strArr[0].split('')
    let kStr = strArr[1].split('')
    console.log("nStr => ",nStr ,"kStr => ",kStr );
    for (let ind = 0; ind < kStr.length; ind++) {
        for (let index = 0; index < nStr.length; index++) {
            kStr[ind] === nStr[index] ? subStr.push(nStr[index]) : null

        }
    }

    console.log("subStr => ",subStr.join(''));
}
MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])