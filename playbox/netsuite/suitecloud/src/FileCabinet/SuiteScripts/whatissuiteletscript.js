/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/ui/serverwidget","N/search"],
    
    (serverWidget,search) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {

            log.debug("on request method?",scriptContext.request.method);
          if(scriptContext.request.method == "GET"){
            var form = serverWidget.createForm({
                title: 'Basic Form'
            });
             var feildgroup = Form.addFieldGroup({
                id: "custpage_usergroup",
                label:"userInformation"
             })
             var fName = form.addFeild({
                id:'custpage_namefeild',
                type: serverWidget.feildtype.TEXT,
                label:'First Name',
                container:'custpage_usergroup'

             }).isMandatory = true;
             var lName = form.addFeild({
                id:'custpage_lastnamefeild',
                type: serverWidget.feildtype.TEXT,
                label:'Last Name',
                container:'custpage_usergroup'

             }).isMandatory = true;
             var mail = form.addFeild({
                id:'custpage_lastnamefeild',
                type: serverWidget.feildtype.EMAIL,
                label:'EMAIL',
                container:'custpage_usergroup'

             }).isMandatory = true;
             Form.addSubmitButton({
                label:'submitButton'
             });
             Form.addResetButton({
                label: 'resetButton'
             });

             var sublist = Form.addSublist({
                id: 'custpage_sublistid',
                label: "sublist",
                type:serverWidget.SublistType.LIST
             });
             sublist.addMarkallButtons();
             Sublist.addField({
                id: 'custpage_checkbox',
                label: 'select',
                type: serverWidget.feildtype.CHECKBOX,
                container: string
             })
             Sublist.addField({
                id: 'custpage_costumer',
                label: 'Customer',
                type: serverWidget.feildtype.TEXT,
             })
             Sublist.addField({
                id: 'custpage_feildid',
                label: 'Feildid',
                type: serverWidget.feildtype.INTEGER,
             })
             Sublist.addField({
                id: 'custpage_trannum',
                label: 'Transaction',
                type: serverWidget.feildtype.INTEGER,
             })
             var mysearch = search.load({
                id: 'customersearc176'
             })
             var linecounter=0;
             mysearch.run().each(function(result){ //each works only for 4000 return results only
                var entity=result.getText({
                    name:'entity'
                });
                var tranid=result.getvalue('tranid');
                var id=result.id;
                Sublist.setSublistValue({
                    id: "custpage_customer",
                    line: linecounter,
                    value: entity
                });
                Sublist.setSublistValue({
                    id: "custpage_trannum",
                    line: linecounter,
                    value: tranid
                });
                Sublist.setSublistValue({
                    id: "custpage_internalidr",
                    line: linecounter,
                    value: id
                });

                linecounter++;
                return true;
             }) 





            scriptContext.writePage({
                pageObject:form
            })
          }
          else{
            log.debug("request triggered in else",scriptContext.request.method);
            var myName = scriptContext.request.parameters.custpage_namefeild;
            log.debug("myname",myName);
            var ServerRequest = scriptContext.request;
            var  linecount = ServerRequest.getLineCount({
                group:"custpage_sublistid"
            });
            for (var i=0;i<linecount;i++){
                var traninternal_id = ServerRequest.getSublistValue({
                    group:"custpage_sublistid",
                    line: "custpage_internalid",
                    name: i
                }) ;
                log.debug("tran internal id",traninternal)
            }
             scriptContext.Response.write({ output: <h1>"Data Recived"</h1>});

          }
          

        }

        return {onRequest}

    });
