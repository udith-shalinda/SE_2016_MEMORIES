import React from 'react';
import { photos } from "./photos";

const MyGallery=({openLightbox})=>{
    
    var degree='20deg';
    return(
        <div>
        {
            photos.map((item,i)=>{
                if(i%2===0){
                    degree='20deg'
                }
                else{
                    degree='-20deg'
                }
                return(
                   <div className='tc dib br1 grow '>
                   <img src={photos[i].src} alt="ims" height="200" width="200" className='bg-light-green pa1 ma2 bw2 shadow-5 dim photo'
                   style={{transform: 'rotate('+degree+')'}}/>
                </div>
            );
        })
        }
        </div>
    );
    // ,opacity:'.7'
}

export default MyGallery;