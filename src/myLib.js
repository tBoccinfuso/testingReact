const EasyJs = {
    Id: function(id){
        return document.getElementById(id);
    }, 
    IdValue: function(id) {
      return document.getElementById(id).value;  
    },
    emailRegex: function(email) {
        const emailRegex = new RegExp("[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}");
        if(!emailRegex.test(email)){return false;} 
        else {return true;}
    },
    phoneRegex: function(phone) {
        const phoneRegex = new RegExp("[1]?[(| |-]?[2-9]{1}[0-9]{2}[)| |-]?[0-9]{3}[-| ]?[0-9]{4}");
        if(!phoneRegex.test(phone)){return false;} 
        else {return true;}
    },
    addClass: function(el, className) {
        document.getElementById(el).classList.add(className);
    },
    removeClass: function(el, className) {
        document.getElementById(el).classList.remove(className);
    },
    hideElement: function(el) {
        document.getElementById(el).style.display='none';
    },
    showElement: function(el) {
        document.getElementById(el).style.display='block';
    },
    getName: function(id) {
       return document.getElementById(id).name;
    },
    getType: function(id) {
       return document.getElementById(id).type;
    },
    toJSON: function(obj) {
        return JSON.stringify(obj);
    },
    findByTag: function(tag) {
        return document.getElementsByTagName(tag);
    },
    findByClass: function(className) {
        return document.getElementsByClassName(className);
    },
    randomNumber: function(num1, num2){
        return Math.floor((Math.random() * num2) + num1);
    }
}

export default EasyJs;