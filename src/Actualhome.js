
import Slider from './Slider';
const Actualhome = () => {

    
  const images = [
    '/Categories/Stationery/Stationery.jpg',
    '/Categories/GiftsResized.jpg',
    '/Categories/CleaningResized.jpg',
    '/Categories/sportResized.jpg',
    '/Categories/DecorationResized.jpg',
    '/Categories/PackagingResized.jpg',
    '/Categories/HouseHoldResized.jpg',
    '/Categories/TOYSResized.jpg',
    '/Categories/KidsFashionResized.jpg',
    '/Categories/MensFashionResized.jpg',
    '/Categories/WomenFashionResized.jpg',
    '/Categories/HomeDecorResized.jpg',
    '/Categories/TailoringResized.jpg',
    '/Categories/Baby CareResized.jpg',
    '/Categories/DisposableResized.jpg'
    
    // Add more image URLs as needed
  ];

  const url =['/Stationery','/Stationery','/Stationery','/Stationery',
  '/Stationery','/Stationery','/Stationery','/Stationery',
  '/Stationery','/Stationery','/Stationery','/Stationery',
  '/Stationery','/Stationery','/Stationery'
  ];



  return (
    <div className="app">
      
      <Slider images={images} urls={url}/>
    </div>)
};
export default Actualhome;