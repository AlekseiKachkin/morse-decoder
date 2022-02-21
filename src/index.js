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
   const lettersBin = []
   let i = 0;
   const lettersM = []
   let phrase = ''
   while ( i < expr.length ) {
       lettersBin.push(expr.substring(i, i + 10))
       i += 10;       
   }

   lettersBin.forEach( (item) => {
       let letter = ''
       if (item[0] === '*'){
           letter = ' '
       } else {
        for (let i = item.indexOf('1'); i < item.length; i += 2) {
            if (item[i+1] === '0'){
                letter = `${letter}${'.'}`
            } else {
                letter = `${letter}${'-'}`
            }
           }
       }
       lettersM.push(letter)
   })

   lettersM.forEach( (item) => {
       if (item === ' ') {
           phrase = phrase + ' '
       } else {
           phrase = `${phrase}${MORSE_TABLE[item]}`
       }
   })
  return phrase
}

module.exports = {
    decode 
}