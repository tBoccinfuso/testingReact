export const validateForm = (form)=> {
  
  //Storing our textboxes as variables
     const userName = form.userName;
     const fNameTxtbox = form.firstName;
     const lNameTxtbox = form.lastName
     const emailTxtbox = form.contactEmail;
     const phoneTxtbox = form.contactPhone;
     const password = form.password;
     const confirmPass = form.confirmPass;
  //Phone  and Email number Regex
     const phoneRegex = new RegExp("[1]?[(| |-]?[2-9]{1}[0-9]{2}[)| |-]?[0-9]{3}[-| ]?[0-9]{4}");
     const emailRegex = new RegExp("[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
     
     //Creating array for our possible error mesages.
     const errors = [];
  
     const registerError = document.getElementById("registerError");
  
  //Check to see if the user left the First, Last, Email are empty. Display an error message as needed.
     if (!userName) {
       errors.push({ field: userName, message: "Missing user name." });
     }
     if (!password) {
       errors.push({ field: password, message: "Enter a password."});
     } else {
       if(password !== confirmPass) {
       errors.push({ field: confirmPass, message: "Passwords do not match."});
       }
     }
     if (!fNameTxtbox) {
       errors.push({ field: fNameTxtbox, message: "Missing first name." });
     }
     if (!lNameTxtbox) {
       errors.push({ field: lNameTxtbox, message: "Missing last name." });
     }
     if(!emailRegex.test(emailTxtbox)) {
      errors.push({ field: emailTxtbox, message: "Invalid email address."});
       }
     if(!phoneRegex.test(phoneTxtbox)) {
       errors.push({ field: phoneTxtbox, message: "Invalid phone number."});
    }
     if (errors.length > 0){
      
     const tempArray = errors.reduce(function(output, element) {
      if(output.indexOf(element.message) === -1) {
        output.push(element.message);
      }
      return output;
    }, []);
    let message = "Please fill out all the required information: ";
    message += "<ul>";
    for(let i in tempArray) {
      message += "\n";
      message += "<li>"+ tempArray[i] +"</li>";
    }
    message += "</ul>";
    
    registerError.innerHTML = message; 
    registerError.style.display = 'block';

    return false;
    }
     else{
      return true;
     }
  }