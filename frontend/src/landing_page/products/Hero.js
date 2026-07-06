import React from 'react';
 function Hero() {
    return ( 
        <div className='container border-bottom ,n-5'>
            <div className=' row mt-5 p-5 text-center'>
                <h1 className='p-2'>Technology</h1> 
                <h3 className = 'text-muted mt-3 fs-5'>Sleek, modern and intuitive trading platforms</h3>
                <p className='mt-3 mb-5'> check out our <a href='/products' style={{textDecoration:"None"}}>investment offering <i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
        </div>
     );
 }
 
 export default Hero;