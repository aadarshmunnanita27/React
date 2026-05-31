import {useState} from 'react';
import './ProductForm.css'


function ProductForm(props){

     const [NewTitle,setTitle]=useState('');
     const [NewDate,setDate]=useState('');

    function titlechangeHandler(event,prevState){
        // setTitle(event.target.value);
        // console.log(event.target.value);
    }

     function datechangeHandler(event){
        setDate(event.target.value);
        console.log(event.target.value);
   
    }

    function submitHandler(event){
       event.preventDefault();
 //object create krna 
       const productData={
        title:NewTitle,
        date:NewDate
       };
    //    console.log(productData);
    props.onSaveProduct(productData);
       setTitle('');
       setDate('');
    }
     
  return(
        <form onSubmit={submitHandler}>
          <div className="new_product_control">   
            <div className="new_product_control">
                <label>Title</label>
                <input type="text" value={NewTitle} onChange={titlechangeHandler}></input>
            </div>
            <div className="new_product_control" >
                <label>Date</label>
                <input type='date' value={NewTitle} onChange={datechangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className="new_product_button">
                <button type='submit'></button>
            </div>
         </div>
       </form>
  );


}

export default ProductForm;