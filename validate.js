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
    if(!/[a-ö0-9]+@[a-ö]+\.[a-ö]{2,3}/.test(email)){       // source for regex : https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/
        alert("incorrect email")
    }
    if(!/^[0-9]{10}$/.test(phonenum)){   // source for regex :    
        alert("incorrect phone number")
    }
    //alert(/^[a-zA-Z]+$/.test('hej1'))


}