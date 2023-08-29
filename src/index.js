const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let res = [];
    let morseArr = [];
    let str = '';
    let dec = '';
  for (let i = 0; i < expr.length; i += 10) {
      const chunk = expr.slice(i, i + 10);
      res.push(chunk);
  }
  res.forEach(a=>{
    str=a.replace(/10/gi, '.');
    str=str.replace(/11/gi, '-');
    str=str.replace(/0/gi, '');
    morseArr.push(str) 
    })
  morseArr.forEach(a=>{
    let el = Object.values(MORSE_TABLE)[Object.keys(MORSE_TABLE).indexOf(a)]
    if(el != undefined) dec+= el;
    else dec+= ' ';
  })
  return dec;
}


console.log(decode('0000101110000011111100000010110000111010**********00000000110000111111**********00101111100000101110000011111100001111100000101110000000101100000011110000001111000000101000000011100000111110'))

module.exports = {
    decode
}