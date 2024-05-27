
import data from "./products_data";
import Boxes from "./product_box";
import React, { useState } from "react"; 


const Products = (props) =>{
   // console.log(props)
  const [ selectedValue, setSelectedValue] = React.useState("viewall");
  const [ minPrice, setMinPrice] = React.useState(0);
  const [ maxPrice, setMaxPrice] = React.useState(100000);
  const[product,setProduct]=React.useState(data);
  const handleRadioChange = ( value ) => { 
    setSelectedValue(value); 
  }; 
  const handleMinChange = ( event ) => { 
    setMinValue(event.target.value); 
  }; 
  const handleMaxChange = ( event ) => { 
    setMaxValue(event.target.value); 
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    const dat = data.filter(
        (da) => Number(da.cost) >= Number(minPrice) && Number(da.cost) <= Number(maxPrice)
    );
    setProduct(dat);
    //onFilter({ minPrice: Number(minPrice), maxPrice: Number(maxPrice) });
  };
const vdat=product.map(product=>{
    return <Boxes 
    items={product}
    sort={selectedValue}
    addToCart={props}
    />
  })
  return (
    <div className="sort">
    <div className="left">
        <br></br>
    <form onSubmit={handleSubmit} className="filter-price">
    <h3 style={{color:"black"}}>Filter By Price</h3> 
    <label>
    <label htmlFor="minPrice"></label>
        <input
          type="number"
          id="minPrice"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        /></label>
    <label>
    <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          placeholder="Max"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
    </label><br></br><br></br>
    <label><input type="submit" placeholder="Filter"/></label>
    <br></br><br></br>
    </form>
    <form className="sort-option"  style={{color:"grey"}}>
    <h5 style={{color:"black"}}>Products Categories</h5>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="viewall" onChange={() => handleRadioChange( "viewall")} />
            View All
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Antioxidants" onChange={() => handleRadioChange( "Antioxidants")}/>
            Antioxidants
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Ayurvedic" onChange={() => handleRadioChange( "Ayurvedic")}/>
             Ayurvedic
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Digestive-Health" onChange={() => handleRadioChange( "Digestive-Health")}/>
            Digestive Health
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="General-Health" onChange={() => handleRadioChange( "General-Health")}/>
            General-Health
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Herbal-Speciality" onChange={() => handleRadioChange( "Herbal-Speciality")}/>
            Herbal Speciality
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Immune-Health" onChange={() => handleRadioChange( "Immune-Health")}/>
            Immune-Health
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Man-Health" onChange={() => handleRadioChange( "Man-Health")}/>
            Man Health
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Organic" onChange={() => handleRadioChange( "Organic")}/>
            Organic
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="results" value="Sexual-Health" onChange={() => handleRadioChange( "Sexual-Health")}/>
            Sexual Health
          </label>
        </div>
      </form>
    </div>
    <div className="products-list1">
    {vdat}
    </div>
    </div>
  )
}
export default Products;