/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/https', 'N/ui/dialog', 'N/url'],
/**
 * @param{https} https
 * @param{dialog} dialog
 * @param{url} url
 */
function(https, dialog, url) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
       function saveRecord(scriptContext) {
        try{
            var costumer = scriptContext.currentRecord;
            var comments = costumerRecord.getValue({
                fieldId: 'comments'
            });
            var suiteleturl = url.resolveScript({//provides the internal url of the script by the deploymentid and script id of the suiteletbackend script by this;
                deploymentId: "customscript191 ",
                scriptId: " customdeploybackend1"
            });
            var response = https.post({url:suiteleturl,body:comments});
            if(response.body =='F'){
                dialog.alert({
                    title: 'warning',
                    message: 'please enter value into the comments section'
                });
              return false;
            
            }
            return true;
        }
          catch(e){
          log.error("error in CL saverecord",e.tostring());
          }
         };

    return {
      
        saveRecord: saveRecord
    };
    
});
