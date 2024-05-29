/**
 /**
 * @NApiVersion 2.1
 * @NScriptType MassUpdateScript
 */
define(['N/record'],
    /**
 * @param{record} record
 */
    (record) => {
        /**
         * Defines the Mass Update trigger point.
         * @param {Object} params
         * @param {string} params.type - Record type of the record being processed
         * @param {number} params.id - ID of the record being processed
         * @since 2016.1
         */
        const each = (params) => {
            log.debug({
                title:"params",
                details: JSON.stringify(params)
            });
            var objr = record.load({
                type: params.type,
                id: params.id
            });
            var linecount = objr.Record.getLineCount({
                sublistId: 'item'
            });
            for(var i= 0;i<linecount;i++ ){
                objrSublist.setSublistValue({
                    id: 'item',
                    feildid:'quantity',
                    line: i ,
                    value: 5
                });
                var id = onjr.save();
                log.debug(id,'this the id');

            }

        }
          

        return {each}

    });
