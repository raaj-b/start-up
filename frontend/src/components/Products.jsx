import React from "react";
import Clothes from "../components/Clothes"
import Grocery from "./Grocery";
import Electronics from "./Electronics";
import Footwear from "./Footwear";
function Products() {
   

    return (
        <>
            {/* Clothes products */}
            <Clothes/>
            {/* Grocery products */}
           <Grocery/>
            {/* Electronics products */}
            <Electronics/>
            {/* Footwear products */}
            <Footwear/>
        </>
    );
}

export default Products;
