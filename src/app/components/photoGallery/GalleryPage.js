import React from 'react';
import MyGallery from './Gallery';

const GalleryPage=()=>{
    return(
        <div >
    
        <h1 >User Name</h1>
        <div className="bg-silver ma6 pa4 ">
          <MyGallery ></MyGallery>
        </div>
        </div>
    );
}

export default GalleryPage;