export const checkValidData  = (email,password,userName) => {

    const isValidUserName =  /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(userName);
    const isValidEmail    =     /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   

    if(!isValidEmail) return "Email not valid";
    if(!isValidPassword) return "Password not valid";
    if(!isValidUserName) return "Username is not valid"
    return null;
}