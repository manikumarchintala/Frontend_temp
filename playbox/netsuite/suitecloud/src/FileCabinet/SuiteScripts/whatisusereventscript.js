/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define([N/redirect,N/record],
    
    () => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            log.debug("before triggered on type", scriptContext.type);
          if(scriptContext.type == scriptContext.UserEventType.VIEW){//only executes in view mode i.e only button will be visible in viewmode only
            var form = scriptContext.form;
            var custombutton = form.addButton({
                id: "custpage_custom_button",
                label: "custombutton",
                functionName: "onclickcustombutton"
            });
          }

        };

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {
          log.debug("before trigger submited on type",scriptContext.type);
          log.debug("old value of memo",scriptContext.oldRecordRecord.getValue('memo'));
          log.debug("new value of memo",scriptContext.newRecord.getvalue('memo'));
//add logics to perform validations before submitting
          throw "error not a valid record"


        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {
          log.debug("after submit type is triggered on",scriptContext.type);
          var costumervalue = scriptContext.newRecord.getValue({
          feildId:'entity'
          });
          log.debug("old value of memo",scriptContext.oldRecordRecord.getValue('memo'));
          log.debug("new value of memo",scriptContext.newRecord.getvalue('memo'));
          redirect.toRecord({
            id: costumervalue,
            type: record.type.COSTUMER,
           //redirects to the customer record after submit.
          })
         
        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });
