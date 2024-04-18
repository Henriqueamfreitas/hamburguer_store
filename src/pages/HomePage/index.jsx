import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { useEffect } from "react";
import { api } from "../../services/api";
import { StyledP } from "../../styles/typography";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [filteredProduct, setFilteredProduct] = useState([])
   const [value, setValue] = useState("");

   const [isOpen, setIsOpen] = useState(false)
   const cartListLS = localStorage.getItem("@HamburgueriaCart")
   const [cartList, setCartList] = useState(cartListLS ? JSON.parse(cartListLS) : []);

   useEffect(() => {
      const loadData = async () => {
         const response = await api.get("/products")
         setProductList(response.data)
      }

      loadData()
   }, [])


   useEffect(() => {
      localStorage.setItem("@HamburgueriaCart", JSON.stringify(cartList))
   }, [cartList])




   return (
      <>
         <Header 
            setIsOpen={setIsOpen} 
            cartList={cartList} 
            productList={productList} 
            value={value} 
            setValue={setValue} 
            setFilteredProduct={setFilteredProduct} 
         />
         <main>
            {
               filteredProduct.length === 0 && value !== "" ?
               <StyledP>Não achamos nenhum produto com esse nome</StyledP>:
               <ProductList 
                  productList={productList} 
                  cartList={cartList} 
                  setCartList={setCartList} 
                  value={value} 
                  filteredProduct={filteredProduct} 
               />
            }
            {
               isOpen ?
               <CartModal productList={productList} cartList={cartList} setCartList={setCartList} setIsOpen={setIsOpen} />:
               null
            }
         </main>
      </>
   );
};
