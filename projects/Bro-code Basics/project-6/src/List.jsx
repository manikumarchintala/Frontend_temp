import PropTypes from "prop-types"
function List(props){

    const category = props.category;
    const itemList = props.items;
             //Fruits.sort((a,b)=>(a.name.localeCompare(b.name)));
            // Fruits.sort((a,b)=>(a.calories-b.calories));
             //const lowcalfruits = Fruits.filter(Fruit=>Fruit.calories<100)
const listitems = itemList.map( item => <li key={item.id}>
                                        {item.name}: &nbsp;
                                        {item.calories}</li>)
 return(
    <>
     <h3 className="list-category">{category}</h3>
     <ul className="list-items">{listitems}</ul>
    </>
 )

};
List.PropTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calories:PropTypes.number})),
}
List.defaultProps = {
    category:"Category",
    items:[],
}
export default List;