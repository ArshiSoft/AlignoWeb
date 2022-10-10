// import { createContext, useContext } from "react";

// const UIContext = createContext();
// export function useIinventoryUIContext(){
//     return useContext(UIContext);
//  }

//  const submitFormHandler = ({ payload }) => {
//     // const MassCustomerFlag = currentCustomer == "massCustomer" ? "Y" : "N"
//     console.log("The payload is", payload)
//     const itemMasterPayload = {
//       "data":
//         { 
//            "TEN_ID" 		: tempData?.TEN_ID || "" ,
//            "CODE" 			: payload?.CODE || "",
//            "NAME" 			: payload?.CORPORATE_NAME || "" ,
//            "CUS_ID" 		: "" ,
//            "ADDRESS_1"		: payload?.ADDRESS_1 || "" ,
//            "ADDRESS_2" 		: "" ,
//            "PROSTA_ID" 		: "" ,
//            "CITY" 			: payload?.CITY || "" ,
//            "POSTAL_CODE" 	: payload?.POSTAL_CODE || "" ,
//            "PHONE_1" 		: payload?.PHONE_1 || "" ,
//            "PHONE_2" 		: "" ,
//            "EMAIL" 			: payload?.EMAIL || "" ,
//            "NOTES" 			: payload?.NOTES || "" ,
//            "BUSINESS_NUMBER" : "" ,
//            "INVOICE_NOTES" 	: "" ,
//            "ACTIVE_FLAG" 	: payload?.ACTIVE_FLAG || "" 
//         },
//       "action": "Administration",
//       "method": "PostCorporateProfile",
//       "username": "admin",
//       "type": "rpc",
//       "tid": "144"
//     }
//     if (payload?.CUS_ID) {
//       itemMasterPayload.data.CUS_ID = payload?.CUS_ID;
//     } else {
//       itemMasterPayload.data.CUS_ID = null
//     }

//     dispatch(callGenericAsync(itemMasterPayload, "/Administration/PostCorporateProfile", 'post', (res) => {
//       if (res?.CODE === 'SUCCESS') 
//       // {
//       //   //dispatch(actions.inventoryItemsFetched());
//       //   dispatch(actions.fetchCustomersList());
//       //   //includeInactive ? dispatch(actions.fetchCustomersList(null)) : dispatch(actions.fetchCustomersList("Y"));
//       //   //dispatch(defaultactions.getCustomers())
//       //   //dispatch(actions.removeTaxes())
//       //   setSubmitting(false);
//       //   //setFiles([]);
//       //   itemMasterToggle();
//       //   setIncludeInactive(false);

//       // } 
//       {
//         if (saveNClose) {
//           itemMasterToggle();
//         } else {
//           setEditData(res?.ResultID)
//           setEditHandler(true);
//           setSubmitting(false);
//           setSaveNClose(false);
//           setFiles([]);
//           setPreviewURL([]);
//         }
//         if (includeInactive) {
//           dispatch(actions.inventoryItemsFetched(null))
//         } else {
//           dispatch(actions.inventoryItemsFetched("Y"))
//         }
//         // overRideByCustomerHandler();
//         // // submitPromoFormHandler(itemMasterPayload.data.PAR_ID);
//         // dispatch(actions.inventoryItemsFetched());
//         // // dispatch(actions.fetchCustomerPromoList(tempData?.itemMasterDetails?.PAR_ID));

//       } 
//       else {
//         alert(res?.CODE);
//         setSubmitting(false);
//         //dispatch(actions.removeTaxes())
//         setItemMasterHandleSubmit(false);
//         itemMasterToggle();
//       }
//     }))
//   };