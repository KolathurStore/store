import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './ProductGrid.css';
import {Link} from 'react-router-dom';
function Home() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  const [filteredData, setFilteredData] = useState(null);


  useEffect(() => {
    // Load the static XLSX file data
    fetch(process.env.PUBLIC_URL + '/Kolathur.xlsx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        
        setFilteredData(jsonData);
      })
      .catch((error) => console.error('Error loading XLSX file:', error));
  }, []);



  if (filteredData && filteredData.length>0){
   var ids=[];
   var urls=[];
   var prices=[];
   var images=[];
   var title=[];
   var desc=[];
   
    console.log('d:'+filteredData);
    var filteredDatadup =filteredData.slice(1,filteredData.length);
    filteredDatadup.forEach(element => {
    console.log('element:'+element[0]);
    ids.push(element[0]);
    urls.push(element[0]);
    images.push(element[2]);
    var teststring = "";
teststring = teststring+element[1];
    //var temptitle=(element[1]).toUpperCase();
    
    console.log('temptitle:'+teststring.toUpperCase);
    title.push(element[1]);
    prices.push(element[4]);
    desc.push(element[5]);
    console.log('urls[0]:'+urls[0]);
   })
    
  }
 

  return (
    
    <div className="App">

      {filteredData && filteredData.length > 0 ? (
        <div>
         
       
          <div className="product-grid">
      {urls.map((row,index) => (
     <Link to={images[index]}>
        <div key={index} className="product-item" >
        <img style={{ borderRadius: '25px',  backgroundColor: '' } } src={process.env.PUBLIC_URL + row} alt="" className="product-image" />
        <img src="https://drive.google.com/uc?export=view&id=1fhhU2HTGbrSjiS4thQYt9gh1QhxTLWGq" alt="drive" />
         <h3 style={{ color: 'black' }}>{title[index]}</h3> 
        </div>
        </Link>
        
      ))}
    </div>
          
   
               
        </div>
      ) : (
        <p>No matching data found.</p>
      )}
    </div>
  );
}



export default Home;
