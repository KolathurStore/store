
import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './ProductGrid.css';
import {Link} from 'react-router-dom';
function Store(Name) {
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
       // const sheetName = workbook.SheetNames[5];
        const worksheet = workbook.Sheets["Disposable"];

        // Convert sheet to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet,{ header: 1 });
       // const sheet = workbook.Sheets[sheetName];
      //  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        console.log('json data:'+jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => console.error('Error loading XLSX file:', error));
  }, []);



  if (filteredData && filteredData.length>0){
    console.log('json data:filteredData'+filteredData.length);
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
          {console.log('actual url '+urls)}
      {urls.map((row,index) => (
        
     <Link to={images[index]+`/${'1'}`}>
        <div key={index} className="product-item" >
        <iframe
          src={"https://drive.google.com/file/d/"+row+"/preview"}
          width="640"
          height="480"
          allow="autoplay"
        ></iframe> 
          <h10 style={{ color: 'black' }}>{title[index]}</h10> 
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



export default Store;
