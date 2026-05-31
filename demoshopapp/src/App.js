
import './App.css';
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';
import Card from './Components/Card';
function App() {
  const response=[
    {
      itemName:"Nirma",
      ItemDate:"20",
      itemMonth:"June",
      itemYear:"1998"

    },
      
    {
      itemName:"Nirma2",
      ItemDate:"202",
      itemMonth:"June2",
      itemYear:"19982"
    },

    {
      itemName:"Nirma3",
      ItemDate:"204",
      itemMonth:"June3",
      itemYear:"19983"
    }

  ];
  const itemTwoName="Surfexcel"; //another method for props pass 
  return (
    <div>
         <Card>
           <Item name={response[0].itemName} > hello ji main hunn aapka item</Item>    
           <ItemDate day={response[0].ItemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

            <Item name={response[1].itemName} > </Item>
            <ItemDate day={response[1].ItemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

            <Item name={response[2].itemName} > </Item>
            <ItemDate day={response[2].ItemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
          
            <div className="App"> hello ji </div>
          </Card>
    </div>
  );      //is return wale function mein make sure ki parent 
          //ek hi parent hona chahia like div n rhe to
          //item,div alg alg isliye error aaeasga.isliye 
          // dono tag ko ek hi parent bnaya div se
}

export default App;
