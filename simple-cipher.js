//encodes a message using a caesar shift

//declare alphabet. Alphabet can be changed to further customize the encoding of the message.
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function encode(message, shift) {
    
    message = message.toLowerCase();
    console.log(message);
    
    if (shift > 26) shift = shift%26;
    console.log(shift);
    shift = Math.floor(shift);
    console.log(shift);
    if (shift < 0) shift = 26 + shift;
    console.log(typeof message);
    // if ((typeof message) !== string) {
    //     return console.log("Must include a valid message in first argument");
    // }

    // if (typeof shift !== 'number') {
    //     return console.log("Must include a valid number in second argument");
    // }
    // if (shift === 0 || (shift%26 === 0)) throw "That isn't a very good cipher, try again";
    
    let encodedMessage = '';
    
    for (letter of message) {
        originalIndex = alphabet.indexOf(letter);
        if (originalIndex === -1) {
            encodedMessage += letter;
        } else if (originalIndex + shift < 26) {
            encodedMessage += alphabet[originalIndex +shift];
        } else encodedMessage += alphabet[originalIndex-(26-shift)];
    }

    console.log(encodedMessage);
}


// encode(NaN, 7);
// encode("hello", true);
//encode('salads', 0);
encode("message",-5);
encode("I love you", 1000);