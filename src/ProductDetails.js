import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
//import './ProductDetails.css';
const ProductDetails = () => {
  const { Price } = useParams();
  const { userId2 } = useParams();
  console.log('userId1',{userId2})
  const { userId3 } = useParams();
  console.log('userId1',{userId3})
  const { userId4 } = useParams();
  console.log('userId1',{userId4})
  const { userId5 } = useParams();
  console.log('userId1',{userId5})
  const { userId1 } = useParams();
  console.log('userId1',{userId1})
  var prizing=parseInt({userId1}.userId1);


  const{Extratag}=useParams
  var tag = {Extratag}.Extratag
 console.log("tag"+tag)
  var urls= { Price }.Price;
  console.log("tag"+tag)
  console.log("tag"+urls)

  urls= urls.replace(/Q~~~Q/g, "/");
  var replacedString = urls.replace(/Q~~~Q/g, '/');

console.log("replacedString",replacedString);
  
  const myArray = replacedString.split("~~~~");
  console.log('myArray',myArray)




  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(myArray[0]);
  
  
  const productData = {
    name: {userId2}.userId2,
    description: "(Pages) :"+{userId3}.userId3+" (NoteSize) :"+{userId4}.userId4+" (Ruling Type) "+{userId5}.userId5,
    price: prizing,
    images: myArray
  };

  const addToCart = () => {
    const cartItem = {
      name: productData.name,
      quantity: quantity,
      price: productData.price,
      image: selectedImage,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    alert('Product added to cart!');
  };

  const changeImage = (event) => {
    if (event.target.tagName === 'IMG') {
      const selectedImageSrc = event.target.src;
      setSelectedImage(selectedImageSrc);
    }
  };

  return (
    <>
 <h2>{productData.name}</h2>
          <p>{productData.description}</p>
          <p>Price: ₹{productData.price.toFixed(2)}</p>

          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />

          <img id="selectedImage" src={selectedImage} alt="Product Image" />
        
          <div className="product-images_Ps" onClick={changeImage}>
          {productData.images.map((image, index) => (
          <img
            key={index}
            src={image}
           alt={`Product ₹{index + 1}`}
             className={`product-image_P ${selectedImage === image ? 'selected-image_P' : ''}`}
           />
              ))}

          </div>

          <button className="add-to-cart_P" onClick={addToCart}>
            Add to Cart
          </button>

          <div>
      <YouTube videoId={"l-_PUYlJRY8"} />
    </div>
        </>

        
  );
};

export default ProductDetails;
