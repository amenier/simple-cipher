//encodes a message using a caesar shift

//declare alphabet. Alphabet can be changed to further customize the encoding of the message.
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

/*encode funciton takes a string to encode and a number to shift the letters by
the number can be positive or neagtive, an integer or float. the shift will be 
rounded down to the nearest integer */
function encode(message, shift) {

    //first section checks for certain edge cases and stops function if necessary
    if ((typeof message) !== 'string') {
        return console.log("Must include a valid message in first argument");
    }

    if (typeof shift !== 'number') {
        return console.log("Must include a valid number in second argument");
    }
    if (shift === 0 || (shift%26 === 0)) {
        return console.log("That isn't a very good cipher, try again");
    }

    //sets the message to be lower case to ensure everything is processed
    //I may work on making sure case is matched in the final message later
    message = message.toLowerCase();

    /*this section makes sure that the shift number can be properly used in the below section
    First, the shift is divided by 26 to check for a remainder and adjust the shift accordingly
     for some reason, the modulo returns the normal number if it is less than 26. If the number is negative
     then the shift is adjusted to make sense in the calculation below*/
    shift = Math.floor(shift % 26);
    if (shift < 0) shift = 26 + shift;

    //creates an empty string for the encoded message
    let encodedMessage = '';
    
    /*runs through each character of the message. If the character isn't found, it copies
    it into the new string. does a forward shift or backward shift based on
    whether the shift would hit the end of the index*/
    for (letter of message) {
        originalIndex = alphabet.indexOf(letter);
        if (originalIndex === -1) {
            encodedMessage += letter;
        } else if (originalIndex + shift < 26) {
            encodedMessage += alphabet[originalIndex +shift];
        } else encodedMessage += alphabet[originalIndex-(26-shift)];
    }

    //returns the encoded message
    return console.log(encodedMessage);
}

//edge case errors
encode(NaN, 7);
encode("hello", true);
encode('salads', 0);

//various examples
encode("I was eating those beans!",12);
encode("message",-5);
encode("message",-27);
encode("negative", -500.42);
encode("I was eating those beans!", 1000);
encode("abc",1);

//test decode
encode("u ime qmfuzs ftaeq nqmze!", (26-12));