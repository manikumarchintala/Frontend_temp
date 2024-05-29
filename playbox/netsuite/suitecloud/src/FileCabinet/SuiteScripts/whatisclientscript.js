const suitecloudConfig = require("../../../suitecloud.config");

/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([],

function() {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record//refers to type of script it deployed on
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {
        var curobj = scriptContext.currentRecord;
      if(scriptContext.mode == 'create'){
        console.log("pageint triggered")
        curobj.setValue({
            fieldId:'entity',
            Value: 1777
        })
     }
 };

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(scriptContext) {
      if(scriptContext.sublistId == 'item' && scriptContext.fieldId == 'memo' || "item" ){
        alert(" i am feild changed entrypoint . ive been applied either item or memo")
      }
   };

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {
       
        console.log("postsourcing triggered ",scriptContext.fieldId);
        if(scriptContext.sublistId == 'item' && scriptContext.fieldId == 'item')
        scriptContext.CurrentRecord.setCurrentSublistValue({
            sublistId: scriptContext.sublistId,
            fieldId: 'isclosed',
            value: true, //makes the closed feild in the line to default to yes when the quantity is and item is selected.
           
        });

    }

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(scriptContext) {
        console.log("sublist changed");
        var currentRecord = scriptContext.CurrentRecord;
        var stroperation = scriptContext.operation;
        console.log('stroperation',stroperation)
        if(scriptContext.sublistId === 'item')
        currentRecord.setValue({
         fieldId : 'memo',
         value :'total has changed'+currentRecord.getValue({fieldId:'total'})
         +'with operation' +stroperation
    })

    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(scriptContext) {
        console.log("lineinit triggered");
        var currentRecord = scriptContext.currentRecord;
        var sublistname = scriptContext.sublistId;
        if(sublistname=='item')
        CurrentRecord.setCurrentSublistValue({ // set's the value to 2 when new line is created to deafult to 2
            sublistId: sublistname,
            fieldId: 'quantity',
            value: 2
        })


    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(scriptContext) {
       
        console.log("validatefeild triggered");
        if(scriptContext.currentRecord=='memo'){
            var memofeild=scriptContext.CurrentRecord.getValue('memo');
            console.log("memofeild",memofeild);
            if(memofeild='UI')
            return true;
        else
        return false;

    };
    return true;
    }
    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(scriptContext) {
        if(scriptContext.sublistId==='item'){
        var itemid = scriptContext.CurrentRecord.getCurrentSublistValue({
            sublistId: 'item',
            fieldId: 'item'
        });
        console.log("validateline triggered");//until unless valid item with id 252 is selected it wont let the user commit
        if(parseInt(itemid)==252)
        return true;
         else{
         alert("insert valid item");
        return false;}

     }
     return true;
    };

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {
        if(scriptContext.sublistId==='item'){
            var itemid = scriptContext.CurrentRecord.getCurrentSublistValue({
                sublistId: 'item',
                fieldId: 'item'
            });
            console.log("validate insert triggered");//until unless valid item with id 252 is selected it wont let the user commit by clicking insert in the line.
            if(parseInt(itemid)==252)
            return true;
             else{
             alert("insert valid item");
            return false;}
    
         }
         return true;
    }

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {
        console.log("validateline triggered on sublistid : "+ scriptContext.sublistId);
        if(scriptContext.sublistId == 'item'){
            var intQuntity = scriptContext.currentRecord.getCurrentSublistValue({
                sublistId:'item',
                fieldId:'quantity'
            });
            if(parseInt(intQuntity==1)){
                return true
            }
            else {
                alert("please enter the correct value")
                return false;
            }
        }
      return true;

    }

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord(scriptContext) {
        console.log("saverecord triggered");
        var currentRecord = scriptContext.currentRecord;
       var initemcount = currentRecord.getlinecount({sublistId:'item'});
       console.log("item line count")
       if(initemcount < 2){
        console.log("min 2 lines required")
        return false;
       }
        
        return true;


    }

    return {
        pageInit: pageInit,
        fieldChanged: fieldChanged,
        postSourcing: postSourcing,
        sublistChanged: sublistChanged,
        lineInit: lineInit,
        validateField: validateField,
        validateLine: validateLine,
        validateInsert: validateInsert,
        validateDelete: validateDelete,
        saveRecord: saveRecord
    };
    
});
