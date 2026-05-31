import './NewProduct.css'
import ProductForm from './ProductForm'

function NewProduct(){

    function saveProduct(product){
        console.log("i am inside new product");
    console.log(product);
    //calling parent function
    props.pranay(product);
    }
     return(
        <div classNmae="new-product">
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
     );


}

 export default NewProduct;