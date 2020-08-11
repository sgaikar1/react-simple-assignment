import React from "react";

function MenuItem({ productName }) {
    return(
        <a >
            <span className="menu-text"> {`${productName}`}</span>
            
        </a>
    );
 }

 export default MenuItem; 
