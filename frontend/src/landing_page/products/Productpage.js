import React from 'react';
import Hero from './Hero';
import Leftimage from './Leftimage';
import Rightimage from './Rightimage';
import Universe from './Universe';

function Product() {
    return ( 
        <>
        <Hero />
        <Leftimage 
            imageURL="media/Images/kite.png" 
            prodcutName="Kite"
            productDescription=" Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and iOS devices "
            tryDemo=""
            learnMore="" 
            googlePlay=""
            appStore =""
        />
          <Rightimage
            imageURL="media/Images/console.png" 
            prodcutName="Console"
            productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
            learnMore=""  />
         <Leftimage 
            imageURL="media/Images/coin.png" 
            prodcutName="Coin"
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. "
            tryDemo=""
            learnMore="" 
            googlePlay=""
            appStore =""
        />
          <Rightimage 
            imageURL="media/Images/kiteconnect.png" 
            prodcutName="Kite connect Api"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore=""
            
          />
         <Leftimage 
            imageURL="media/Images/varsity.png" 
            prodcutName="Varsity mobile"
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. "
            tryDemo=""
            learnMore="" 
            googlePlay=""
            appStore =""
        />
      <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        <Universe />
        </>

    );
}

export default Product;