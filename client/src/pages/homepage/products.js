
import data from "./products_data";
import Boxes from "./product_box";
import React, { useState } from "react"; 


const Products = (props) =>{
  const [ selectedValue, setSelectedValue] = React.useState("viewall")
  const handleRadioChange = ( value ) => { 
    setSelectedValue(value); 
  }; 
const dat=data.map(data=>{
    return <Boxes 
    items={data}
    sort={selectedValue}
    addToCart={props}
    />
  })
  return (
    <div className="sort">
    <div>
    <form className="sort-option">
    <h5 style={{color:"black"}}>SORT BY</h5>
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
    <div className="products-list">
    {dat}
    </div>
    </div>
  )
}
export default Products;