import profilepic from "./assets/channels4_profile.jpg"
function Card(){
return(
    <div className="card">
        <img className="Cardimage" src={profilepic} alt="a sampleimg"></img>
        <h2 className="CardTittle">BroCode</h2>
        <p className="CardDescreption">a sample tile to use cards in react</p>

    </div>
)
}
export default Card;