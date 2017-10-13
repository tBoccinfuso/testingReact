export const validateForm = (form)=> {
 
 //Storing our textboxes as variables
     const fNameTxtbox = form.firstName;
     const lNameTxtbox = form.lastName;
     const emailTxtbox = form.contactEmail;
     const subject = form.subject;
     const commentBox = form.message; 
     
  //Phone  and Email number Regex
     const emailRegex = new RegExp("[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
     
     //Creating array for our possible error mesages.
     const errors = [];
 
     const errorFields = document.getElementsByClassName("error");
     for(let i = 0; i < errorFields.length; i++) {
       const element = errorFields[i];
       element.classList.remove("error");
     }
 
 //Check to see if the user left the First, Last, Email are empty. Display an error message as needed.
     if (!fNameTxtbox) {
       errors.push({ field: fNameTxtbox, message: "Missing first name." });
     }
     if (!lNameTxtbox) {
       errors.push({ field: lNameTxtbox, message: "Missing last name." });
     }
    if(!emailRegex.test(emailTxtbox)) {
       errors.push({ field: emailTxtbox, message: "Invalid email address."});
       }     
     if (!subject){
      errors.push({ field: subject, message: "Enter a subject." });
     }
     if (!commentBox){
        errors.push({ field: subject, message: "Enter a message." });
       }

     if(errors.length > 0) {
         // Functional array loops => filter(), reduce(), find()
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
         const contactErrorMsg = document.getElementById("contactError");
         contactErrorMsg.innerHTML = message; 
         contactErrorMsg.style.display = 'block';
 
         return false;
 
     }
     else {
       return true;
     }
 }