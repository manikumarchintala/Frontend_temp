import image from "./assets/download.jpeg"
function Image(){
const img=image;
const Handleclick = (e) => e.target.style.display = "none";
return(<img onClick={(e)=>Handleclick(e)} src={img}></img>)
}
export default Image;