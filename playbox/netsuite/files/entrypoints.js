//client script exntry points 


function validatefeild(context){
    var employe = context.currentrecord;
    if(context.feildid=='custentity_sdr_employyecode'){
        var empcode=employee.getvalue('custentity_sdr_employeecode');
        if(empcode=='x'){
            alert('Invalid employee code value.please try again. ');
            return false;
        }
    }
    return true;
};
//Defines the validation function that is executed when a field is changed by a user or client call.

function saverecord(context){
    var employe = context.currentrecord;
        var empcode=employee.getvalue('custentity_sdr_employeecode');
        if(empcode=='x'){
            alert('Invalid employee code value.please try again. ');
            return false;
        }
        return true;
    };
    //Defines the function that is executed when a record is saved (after the submit
    // button is pressed but before the form is submitted).

    function feildchanged(context){
    var employe = context.currentrecord;
        if(context.feildid== 'phone'){
            var fax = employee.getvalue('fax');
            if(!fax){
                var phone=employe.getvalue('phone');
                employe.setvalue('fax',phone)
            }
        }
    };
//Defines the function that is executed when a field is changed by a user or client call.
