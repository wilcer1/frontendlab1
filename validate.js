function validate(){
    
}

function validateinput(){

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phonenum = document.getElementById("phonenumber").value;
    if(!/^[a-öA-Ö]+$/.test(firstname) || (!/^[a-öA-Ö]+$/.test(lastname))){
        alert("incorrect first or lastname")
    }
    if(!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)){       // source for regex : https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/
        alert("incorrect email")
    }
    if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phonenum)){   // source for regex :  https://www.codegrepper.com/code-examples/javascript/phone+number+regex+javascript
        alert("incorrect phone number")
    }
    //alert(/^[a-zA-Z]+$/.test('hej1'))


}