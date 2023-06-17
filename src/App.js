import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import ImageCard from './Components/ImageCard';



function App() {
  
  let [imageVal, setImgValue] = useState(0);
  const images = [];
  images.push("https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg");
  images.push("https://images.pexels.com/photos/17811/pexels-photo.jpg");
  images.push("https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg");
  images.push("https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg");
  images.push("https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg");
  images.push("https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg");
  images.push("https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg");

  let increment=()=>{
    if(imageVal === images.length-1){
      setImgValue(imageVal=>0);
    }else{
    setImgValue(imageVal => imageVal+1);
    }
  }

  let dincrement=()=>{
    if(imageVal === 0){
      setImgValue(imageVal=>images.length-1);
    }else{
    setImgValue(imageVal => imageVal-1);
    }
  }

  let random=()=>{
      setImgValue(imageVal=>Math.floor(Math.random()*images.length-1));
  }
  // useEffect(() => {
  //     imageVal;
  // });

  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src=".\App.js"></script>
      <div>
        <h1>Basic Image Carousel</h1>
        <h2>{imageVal}</h2>
      </div>
      <div class="row">
    <div class="col-sm-4">
      <h3>Previous image</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      <ImageCard id = "AnimalCard" animal = {images[imageVal-1]}/>
      <button id = "imgButton" onClick={dincrement}>&larr;</button>
    </div>
    <div class="col-sm-4">
      <h3>Current image</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      <ImageCard id = "AnimalCard" animal = {images[imageVal]}/>
      <button id = "imgButton" onClick = {random}>Random Image</button>
    </div>
    <div class="col-sm-4">
      <h3>Next image</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      <ImageCard id = "AnimalCard" animal = {images[imageVal+1]}/>
      <button id = "imgButton" onClick={increment}>&rarr;</button>
    </div>
    </div>
    </div>
  );
}

export default App;
