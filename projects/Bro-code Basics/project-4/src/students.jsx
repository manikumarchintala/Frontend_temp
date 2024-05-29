import proptypes from "prop-types"
//props-are read only properties that are shared between componenents
//a parent component can send data to child component.
//<compomemt key=value/>
function Students(props){
return(
    <div className="student">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>{props.isStudent ? "Yes":"No"}</p>
    </div>
)
}
Students.prototype={
  name:proptypes.string,
  age:proptypes.number,
  isStudent:proptypes.bool,
}
Students.defaultProps = {
    name:"Guest",
    age:22,
    isStudent:false,
}
export default Students;