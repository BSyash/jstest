// charAt()
const xyz = '   bigscal technology Custom Software Development Company In India. bigscal technology   '
console.log('charAt() ->', xyz.charAt(6));

// charCodeAt()
console.log('charCodeAt() ->', xyz.charCodeAt(6));

// codePointAt()
console.log('codePointAt() ->', xyz.codePointAt(1));

// concat()
console.log('concat() ->', xyz.concat(' hehe'));

// endsWith()
console.log('endsWith() -> ', xyz.endsWith("India"));
console.log('endsWith() with length -> ', xyz.endsWith("India", 10));

// fromCharCode()
console.log('fromCharCode() -> ', String.fromCharCode(65, 66, 67));

// fromCodePoint()
console.log('fromCodePoint() -> ', String.fromCodePoint(9731, 9733, 9842, 0x2F804));

// includes()
console.log('includes() -> ', xyz.includes('Software'));
// indexOf()
console.log('indexOf() -> ', xyz.indexOf("l"));
console.log('indexOf() not found  -> ',xyz.indexOf("scal",4));
// lastIndexOf()
console.log('lastIndexOf() -> ', xyz.lastIndexOf("In"));
// localeCompare()
const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase
console.log('localeCompare() -> ', a.localeCompare(b));
console.log('localeCompare() sensitivity -> ', a.localeCompare(b, 'en', { sensitivity: 'base' }));
// match()
const regex = /[A-Z]/g;
console.log('match() -> ', xyz.match(regex));

// matchAll()
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const arr = [...str.matchAll(regexp)]
console.log('matchAll() -> ', arr);

// normalize()
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(`name1 ${name1}, name2 ${name2}`);
console.log(name1 === name2);
console.log(name1.length === name2.length);
const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');
console.log('normalize() -> ', name1NFC.length === name2NFC.length);

// padEnd()
console.log('padEnd() -> ', 'Breaded Mushrooms'.padEnd(20, '*'));

// padStart()
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
console.log('last4Digits',last4Digits);
console.log('padStart() -> ', last4Digits.padStart(fullNumber.length, '*'))

// raw()
const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log('raw() -> ', filePath);

// repeat()
console.log('repeat() -> ', 'I\'m happy'.repeat(5));

// replace()
console.log('replace() -> ', xyz.replace('Software', 'S/W'));

// replaceAll()
console.log('replaceAll() -> ', xyz.replaceAll('bigscal', '132456'));

// search()
const regexx = /[^\w\s]/g;
console.log('search() -> ', xyz[xyz.search(regexx)]);

// slice()
console.log('slice() -> ', xyz.slice(5, 12));

// split()
console.log('split() -> ', xyz.split(' ', 5));

// startsWith()
console.log('startsWith() -> ', xyz.startsWith('bigscal'));

// substring()
console.log('substring() -> ', xyz.substring(5, 18));

// toLocaleLowerCase()
const dotted = 'İstanbul';
console.log('toLocaleLowerCase() -> ', dotted.toLocaleLowerCase('en-US'));

// toLocaleUpperCase()
const city = 'istanbul';
console.log('toLocaleUpperCase() -> ', city.toLocaleUpperCase(`en-US`));
console.log('toLocaleUpperCase() -> ',city.toLocaleUpperCase(`TR`));

// toLowerCase()
console.log('toLowerCase() -> ', xyz.toLowerCase());

// toString()
let xc = new String('fifa')
console.log('xc -> ',xc);
console.log('toString() -> ', xc.toString());

// toUpperCase()
console.log('toUpperCase() -> ', xyz.toUpperCase());

// trim()
console.log('trim() -> ', xyz.trim());

// trimEnd()
console.log('trimEnd() -> ', xyz.trimEnd());

// trimStart()
console.log('trimStart() -> ', xyz.trimStart());

// valueOf()
const stringObj = new String('foo');
console.log('valueOf() -> ',stringObj.valueOf());