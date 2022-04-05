const abc = [{ name: "bigscal", "age": 25 }, { name: "trainees", age: 26 }]
const tempArr = ["company", "bigscal"]
// console.log(["company", "bigscal"].map((data, index) =>
//     {abc[index],abc[index].surname= data}))
console.log(abc.map((item,index )=> ({ ...item ,surname:tempArr[index]})))
