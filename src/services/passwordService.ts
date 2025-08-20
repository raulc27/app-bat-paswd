export default function generatePass(){
    let password: string ='';
    let characters: string = 'Aa@$#12345659abcdefghABCDEFGHIKL';
    let passWordLength = 8;
    for(
        let i=0; i<passWordLength; i++
    ){
        password += characters.charAt(
           Math.floor(Math.random() * characters.length)
        )
    }

    return password;
}