// sports.js
import './ProductDetails.css';
import React, { useState, useEffect,useRef } from 'react';
import * as XLSX from 'xlsx';
import './ProductGrid.css';
import 'rc-slider/assets/index.css';
import InputRange from 'react-input-range';

  import 'react-input-range/lib/css/index.css';

import { Link } from 'react-router-dom';

function Disposable() {

  
 
  const buttonRef = useRef(null);
  const MIN = 0;
  const MAX = 100;
 // State to manage selected options
 const [selectedOptions, setSelectedOptions] = useState([]);

 // onChange event handler
 const handleMultiSelectChange = (selected) => {
   setSelectedOptions(selected);
   console.log("multi")
   // You can do additional logic here if needed
 };
  const [values, setValues] = React.useState([0, 100]); // Initial values

  const handleChange = (newValues) => {
    setValues(newValues);
  };
  
    const [isExpanded, setExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setExpanded(!isExpanded);
    };

 
const [selectedItems, setSelectedItems] = useState([]);
function handleClickfiltersindha(arraysfiltervalue) {
  // Your logic here
  console.log("Received Array"+arraysfiltervalue);
  {
   
    console.log('print',filteredData)
   // if (!filteredData || filteredData.length === 0) return;

    console.log('print filteredDatadup',filteredData)
    const filteredResults = jsonDatasliced.filter((element) => {
      var retval=false;
        console.log('print element',element)
      // You can customize the filtering logic here
      /*const title = element[7].toUpperCase();
      console.log('ret val',title.includes(filterValue.toUpperCase()))
      return title.includes(filterValue.toUpperCase());*/
      console.log('selectedItems element',arraysfiltervalue)
      console.log('selectedItems electedItems.size',arraysfiltervalue.length)
      if(arraysfiltervalue.length>0 ){
        console.log('selectedItems inside')
        arraysfiltervalue.forEach(e=>
                {
                  console.log('selectedItems inside2'+e)
                    const title = element[3].toUpperCase();
                    console.log('ret val',title.includes(e.toUpperCase()))
                    if(title.includes(e.toUpperCase())){
                      retval= true;
                    }   
                     
                }
              
                )
                
      }
      else{
        retval= true
      }
      console.log('is my console printed?'+retval+"999"+element[7])
      return retval
    });
    console.log('filteredResults',filteredResults)
    setFilteredData([ ...filteredResults]);
  }
}
const handleToggleItemsindha = (item) => 
 {
  console.log("Hey sindha type"+typeof(selectedItems))
  console.log("Hey sindha type"+item)
  var filterv1= []

selectedItems.forEach(function (item) {
	filterv1.push(item);
});

console.log("filterv1"+filterv1);
 
  if (selectedItems.includes(item)) {
    
    filterv1.pop(item);
    // If item is already selected, remove it
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
    console.log("inside 1"+selectedItems)
  } else {
    filterv1.push(item);
    // If item is not selected, add it
    setSelectedItems([...selectedItems, item]);
    console.log("inside 2"+selectedItems)
  }
  console.log("Hey sindha button clicked"+selectedItems)
  handleClickfiltersindha(filterv1);
 
};
const MultiSelect = ({ options }) => {
   //buttonRef.current.click();
  
  
    const handleToggleItem = (item) => {
      
     
      if (selectedItems.includes(item)) {
        // If item is already selected, remove it
        setSelectedItems(selectedItems.filter((selected) => selected !== item));
      } else {
        // If item is not selected, add it
        setSelectedItems([...selectedItems, item]);
      }
      console.log("Hey sindha button clicked"+item)
      buttonRef.current.click();
    };
  
    return (
      
      
      <div>




        <h2>Selected Items: {selectedItems.join(', ')}</h2>
        <ul>
          {options.map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={() => {handleToggleItem(item) }}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

//
    
    //const dataToSend = { userId: '41'  , username : 'sindha' , password :'HHAha'}
  const [filteredData, setFilteredData] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [jsonDatasliced, setjsonDatasliced] = useState(null);
  const [Ruling, SetRuling] = useState([]);

  useEffect(() => {
    // Load the static XLSX file data
    fetch(process.env.PUBLIC_URL + '/Disposable.xlsx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        console.log(data)
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        console.log('data'+jsonData)
        const fillter=[];
         const jsonDatasliced  = jsonData.slice(1);
         var replacedjsonDatasliced=[]
         var Ruling=[]
         jsonDatasliced.forEach(e=>{console.log("e",e[3],e[4])
         
         var maintemp=e;
         var temp = ""+maintemp[3];
         var temprulling=""+maintemp[3]
         temp=temp.replace(/\//g, "Q~~~Q")
         maintemp[9]=temp;
         replacedjsonDatasliced.push(maintemp)
         Ruling.push(temprulling)
        })
        console.log('Ruling',Ruling.sort())
        Ruling=Ruling.sort()
        console.log('is my jsonData jsonDatasliced',jsonDatasliced)
         console.log('is my jsonData printed',replacedjsonDatasliced,Ruling)
         const Rule = new Set(Ruling);
         console.log('is my Rule',Rule)
         let array = [...Rule];
         SetRuling(array)
         setjsonDatasliced(jsonDatasliced)
       // setFilteredData(jsonDatasliced);
       setFilteredData(fillter);
        //handleToggleItem(Price) ;
      })
      .catch((error) => console.error('Error loading XLSX file:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
    
  };

  function applyFilter () {
    var retval=false;
    console.log('print',filteredData)
   // if (!filteredData || filteredData.length === 0) return;

    console.log('print filteredDatadup',filteredData)
    const filteredResults = jsonDatasliced.filter((element) => {
        console.log('print element',element)
      // You can customize the filtering logic here
      /*const title = element[7].toUpperCase();
      console.log('ret val',title.includes(filterValue.toUpperCase()))
      return title.includes(filterValue.toUpperCase());*/
      console.log('selectedItems element',selectedItems)
      console.log('selectedItems electedItems.size',selectedItems.length)
      if(selectedItems.length>0 ){
        console.log('selectedItems inside')
            selectedItems.forEach(e=>
                {
                  console.log('selectedItems inside2'+e)
                    const title = element[3].toUpperCase();
                    console.log('ret val',title.includes(e.toUpperCase()))
                    retval= title.includes(e.toUpperCase());   
                     
                }
              
                )
                
      }
      else{
        retval= true
      }
      console.log('is my console printed?'+retval)
      return retval
    });
    console.log('filteredResults',filteredResults)
    setFilteredData([ ...filteredResults]);
  };
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 400 }); const handleRangeChange = (values) => { setRangeValues(values); };

  return (


    
    <div className="App" style={{ backgroundColor: 'white' }}> 



      <div style={{ backgroundColor: 'white' }}>




      <h2>Picked Category : {selectedItems.join(', ')}</h2>
      <ul style={{ columns: '4' }}>
          {Ruling.map((item) => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={() => {handleToggleItemsindha(item) }}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
     
{/*
      <MultiSelect
      options={Ruling}
      value={selectedOptions}
      onChange={handleMultiSelectChange}
    />

      <div>
        <label>
          Filter by Title:{' '}
          <input type="text" value={filterValue} onChange={handleFilterChange} />
        </label>
        <button ref={buttonRef} onClick={handleClickfiltersindha}>Apply Filter</button>
      </div>
          */}
      {filteredData && filteredData.length > 0 ? (
        <div>
          

          <div className="product-grid">
            {filteredData.map((row, index) => (
                
                <Link to={`/ProductDetails/${row[6]}/${'1'}/${row[2]}/${'row[0]'}/${'row[2]'}/${'row3'}`}>
              
                    
                <div className="product-item">
                 { <img src=  {process.env.PUBLIC_URL+row[1]}  alt="" className="product-image" />}                         
                  <h10 id="Title" style={{ color: 'black' }}>{row[2]}</h10>

                  
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

export default Disposable;
