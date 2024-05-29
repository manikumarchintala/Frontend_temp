/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define(['N/record', 'N/search'],
    /**
 * @param{record} record
 * @param{search} search
 */
    (record, search) => {

        /**
         * Defines the Scheduled script trigger point.
         * @param {Object} scriptContext
         * @param {string} scriptContext.type - Script execution context. Use values from the scriptContext.InvocationType enum.
         * @since 2015.2
         */
        const execute = (scriptContext) => {
            var searchobj=search.load({
                id: 'customsearch168'
            })
            searchobj.run().each(function(result){
             var id = result.id;
             log.debug('id',id);//we use the record.load->record.set->record.save.but for just the body level value we are using record.submitfeilds.
             var id = record.submitFields({
                type: record.type.sales_order,
                id:id,
                values: {memo:'ABC',
             },
             options:{
                enableSourcing: false,
                ignoreMandotaryFeilds: true
             }
                
             });

        });
        return true;
    }
        return {execute:execute}

    });
