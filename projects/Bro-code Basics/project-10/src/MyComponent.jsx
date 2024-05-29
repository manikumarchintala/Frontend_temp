import React,{useState} from "react"
function MyComponent(){
    const [name,setName]=useState("Guest")
    const [quantity,setQuantitiy]=useState(1);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("Delivery");
    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setQuantitiy(event.target.value)
    }
    function handleCommentChange(event){
       setComment(event.target.value)
    }
    function handlePaymentChaange(event){
         setPayment(event.target.value)
     }
     function handleshippingchange(event){
         setShipping(event.target.value)
     }
return(<div>
       <input value={name} onChange={handleNameChange}/>
       <p>Name:{name}</p>
       <input value={quantity} onChange={handleQuantityChange} type="number"/>
       <p>Qunatity:{quantity}</p>
       <textarea value={comment} onChange={handleCommentChange} placeholder=" Every Delivery Instructions"/>
       <p>comment:{comment}</p>
       <select value={payment} onChange={handlePaymentChaange}>
       <option value="">select an option</option>
       <option value="visa">Visa</option>
       <option value="MasterCard">MasterCard</option>
       <option value="GiftCard">GiftCard</option>
       </select>
       <p>payment:{payment}</p>
       <label>
        <input type="radio" value="pickup"
         checked={shipping==="pickup"} onChange={handleshippingchange}/>
        PickUp</label>
       <label>
       <input type="radio" value="Delivery"
         checked={shipping==="Delivery"} onChange={handleshippingchange}/>
         Delivery</label>
         <p>shipping:{shipping}</p>
        </div>);
};
export default MyComponent;