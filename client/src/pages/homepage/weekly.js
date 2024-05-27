import data from "./weekly_data";
import Boxes from "./product_box";

const Weekly = (props) =>{
const dat=data.map(data=>{
    return <Boxes 
    items={data}
    sort="viewall"
    addToCart={props}
    />
  });
  return(
    <>
    <h4 style={{marginTop:"20px", fontSize:"25px"}}>This Week's Specials</h4>
    <p style={{color:"grey"}}>All our new arrivals in exclusive brand section</p><br></br><br></br>
    <div className="products-list">
    {dat}
    </div>
    </>
  )
}
export default Weekly;