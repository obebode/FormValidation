
 function validateFormOnSubmit(theForm){
        var reason = "";
        reason += validateFirstname(theForm.firstname);
        reason += validateLastname(theForm.lastname);
        reason += validateMiddlename(theForm.middlename);
        reason += validateEmail(theForm.email);
        reason += validateDateOfBirth(theForm.birthday);
        reason += validateGender(theForm.sex);
        
        return false;   
 }

 function validateFirstname(firstname) {
        var first_name = /^[a-zA-Z]+$/;
        
        if (document.getElementById("firstname").value == ""){
             firstname.style.background = 'Red';
             document.getElementById("invalid_1").innerHTML = " Please enter the first name." ;
        } 
        else if(!first_name.test(document.getElementById("firstname").value)){
             firstname.style.background = 'Red';
             document.getElementById("invalid_1").innerHTML = " The first name can contain just characters a-z and A-Z.";
        }
        else {
            firstname.style.background = 'White';   
        }    
 }
 
 function validateLastname(fld){
        var last_name = /^[a-zA-Z]+$/;
        
        if (document.getElementById("lastname").value == ""){
             lastname.style.background = 'Red';
             document.getElementById("invalid_2").innerHTML = " Please enter the last name. ";
        }
        else if (!last_name.test(document.getElementById("lastname").value)) {
            fld.style.background = 'Red'; 
            document.getElementById("invalid_2").innerHTML = " The last name can contain just characters a-z and A-Z.";
        }
        else {
            fld.style.background = 'White';
        }
 }
 
 function validateMiddlename(fld){
         var middle_name = /^[a-zA-Z]+$/;
         
         if (document.getElementById("middlename").value == "") {
            middlename.style.background = 'White'; 
         }   
         else if (!middle_name.test(document.getElementById("middlename").value)) {
            middlename.style.background = 'Red'; 
            document.getElementById("invalid_3").innerHTML = " The middle name can contain just characters a-z and A-Z.";
         }
         else {
            middlename.style.background = 'White';
        }
 }
 
 function validateGender(fld){
         if (document.getElementById("malebutton").checked == false && document.getElementById("femalebutton").checked == false){
            document.getElementById("invalid_7").innerHTML = "Please select gender";
         }
 }
 
 function trim(s){
        return s.replace(/^\s+|\s+$/, '');
 }
 function validateEmail(fld) {
        var tfld = trim(document.getElementById("email").value);     // value of field with whitespace trimmed off
        var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
        var email_filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]$/
        
   
        if (document.getElementById("email").value == "") {
            email.style.background = 'Red';
           document.getElementById("invalid_4").innerHTML = " Please enter the email. ";
        } 
        else if (!email_filter.test(tfld)) {              //test email for illegal characters
            email.style.background = 'Red';
            document.getElementById("invalid_4").innerHTML = " Please enter valid email address.";
        } 
        else {
              email.style.background = 'White';
        }
 }
 
 function validateDateOfBirth(fld){
       var dob_regex = /^\d{1,2}\-\d{1,2}\-\d{4}$/;   // DD-MM-YYYY 
       
       if (document.getElementById("birthday").value == "")  {
          birthday.style.background = 'Red';
          document.getElementById("invalid_5").innerHTML = " Please enter the date of birthday. ";
       }
       else if (!dob_regex.test(document.getElementById("birthday").value)) {
          birthday.style.backgorund = 'Red';
           document.getElementById("invalid_5").innerHTML = "Please enter the date of birthday in the format DD-MM-YY. ";
           
       } 
       else {
          birthday.style.background = 'white';
       }
 }
 
 function spellcheck(data){
        var found=false;var url='';
        var text=data[0];
        if(text!=document.getElementById('spellcheckinput').value)
        return;
        for(i=0;i<data[1].length;i++){if(text.toLowerCase()==data[1][i].toLowerCase()){found=true;url='http://en.wikipedia.org/wiki/'+text;
        document.getElementById('spellcheckresult').innerHTML='<b style="color:green">Correct</b> - <a target="_top" href="'+url+'">link</a>';}}
        if(!found)
        document.getElementById('spellcheckresult').innerHTML='<b style="color:red">Incorrect</b>';
        document.getElementById('invalid_6').innerHTML='Please check the spelling.';
        
        };
        var getjs=function(value){if(!value)
        return;
        url='http://en.wikipedia.org/w/api.php?action=opensearch&search='+value+'&format=json&callback=spellcheck';document.getElementById('spellcheckresult').innerHTML='Checking ...';
        var elem=document.createElement('script');elem.setAttribute('src',url);elem.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(elem);
        
 }