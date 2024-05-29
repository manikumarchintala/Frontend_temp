/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define([],
    
    () => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            var request = scriptContext.request;
            var response = scriptContext.response;
            if(request.method== POST){
                var comments = request.body;
                log.debug({title:"coments",details:comments});
                if(comments == null || ""){
                    log.debug({title:"responsevalue",details:'F'});
                    response.write('F');
                }else{
                    log.debug({
                        title: 'responsevalue',
                        details: 'T'
                    })
                    response.write('T');
                }
            }

        }

        return {onRequest}

    });
