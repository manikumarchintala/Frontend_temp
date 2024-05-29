function Button(){
    const handleclick = () => console.log("OUCH!!");
    const handleclick1=(name)=>console.log(`${name} Stop clicking me !`)
    const handleclick2=(e)=>e.target.textContent="ouch!"
return(<button onClick={(e)=>handleclick2(e)}>Click Me!</button>)
}
export default Button;