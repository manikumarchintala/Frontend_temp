/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(["N/record"],
    
    (record) => {
        /**
         * Defines the function that is executed when a GET request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const get = (requestParams) => {
            log.debug("get request triggered", JSON.stringify(requestParams));
            var objrec = record.load({
                type: record.type.costumer,
                id: requestParams.costumerid,
                isDynamic: true
            })
            return objrec;
        }

        /**
         * Defines the function that is executed when a PUT request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body are passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const put = (requestBody) => {
            log.debug('postistriggered',JSON.stringify(requestBody));
            var id = record.submitFields({
                type: record.type.CUSTOMER,
                id: requestBody.costumerid,
                values: {"comments":suitescripts},
                options: {
                    enablesourcing:true
                }
            }) ;
            return{
                "status":sucess,
                "message": id + "updated"
            }
           
        }

        /**
         * Defines the function that is executed when a POST request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body is passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const post = (requestBody) => {

            log.debug("post is triggered",JSON.stringify(requestBody));
            var objrecord = record.create({
                type: requestBody.record.Type
            });
            objrecord.setValue({
                feildId :'CompanyName',
                value:requestBody.name
            }); objrecord.setValue({
                feildId :'subsiDary',
                value:requestBody.subsiDary
            });
            var id = objrecord.save();
            return JSON.stringify({message :"its created ", id:id});



        }

        /**
         * Defines the function that is executed when a DELETE request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters are passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const doDelete = (requestParams) => {

            log.debug("delete is triggered",JSON.stringify(requestParams));
            var id = record.delete({
                type:requestParams.record.Type,
                id:requestParams.id
            })
            return JSON.stringify({message :"its deleted ", id:id});

        }

        return {get, put, post, delete: doDelete}

    });
