
import './Item.css'

function Item(props){
    const itemname=props.name;

     return (
            <div>
                <p classname="nirma">{itemname}</p>
                {props.children}
            </div>
        );
}
export default Item;