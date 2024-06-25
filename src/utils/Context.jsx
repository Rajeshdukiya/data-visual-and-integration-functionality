import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const Context = (props) => {
    const [product, setproduct] = useState(null);

    const getproducts = async () =>{
        try{
            const {data} = await axios("/products");
            setproduct(data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(product)
    useEffect(() => {
        getproducts();
    }, []);
  return (
    
    <ProductContext.Provider value={[product, setproduct]}>
    {props.children}
    </ProductContext.Provider>
    
  )
}

export default Context