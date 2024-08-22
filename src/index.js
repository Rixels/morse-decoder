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
    '     ':  ' ',
};




function decode(expr) {
    let letter = [];
    for ( let i = 0; i < expr.length; i = i + 10 ) {
        letter = letter.concat([[expr.slice(i, (i + 2)), expr.slice((i + 2), (i + 4)), expr.slice((i + 4), (i + 6)), expr.slice((i + 6), (i + 8)), expr.slice((i + 8), (i + 10))]])
    }
    let connection = [];
  letter.forEach((value, index) => {
   let symbol = [];
  for( let i = 0; i < 5; i = i + 1){
  if (letter[index][i] === "10"){ symbol[i] = '.' }
	else if (letter[index][i] === "11"){ symbol[i] = '-' } 
  else if (letter[index][i] === "00"){ symbol[i] = '' }
  else {symbol[i] = ' '}
  
  }
 let unite = symbol.join('')
 connection[index] = unite;
  })
  let str =''; 
  connection.forEach((value, index) => {
   str = str + MORSE_TABLE[connection[index]]
  }
  )
  
 return str;
}



module.exports = {
    decode
}