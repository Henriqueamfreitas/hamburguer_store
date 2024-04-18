import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { useEffect } from "react";
import { api } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
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
         <Header />
         <main>
            <ProductList productList={productList} cartList={cartList} setCartList={setCartList} />
            <CartModal productList={productList} cartList={cartList} setCartList={setCartList} />
         </main>
      </>
   );
};
