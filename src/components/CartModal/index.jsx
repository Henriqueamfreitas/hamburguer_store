import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { StyledDiv } from "./style";
import { useEffect, useRef } from "react";

export const CartModal = ({ productList, cartList, setCartList, setIsOpen }) => {
   const modalRef = useRef(null);

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const cartFunction = (product) => {
      const filteredProduct = cartList.filter(prod => prod.id === product.id)
      if (filteredProduct.length > 0) {
         return <CartItemCard key={product.id} product={product} cartList={cartList} setCartList={setCartList} />
      } else {
         return null
      }
   }

   const handleOutclick = (event) => {
      if(!modalRef.current.contains(event.target)){
         setIsOpen(false)
      }
   }

   const handleKey = (event) => {
      if(event.key === "Escape"){
         setIsOpen(false)
      }
   }

   useEffect(() => {
      window.addEventListener("mousedown", handleOutclick)
      window.addEventListener("keydown", handleKey)

      return () => {
         window.removeEventListener("mousedown", handleOutclick)
         window.removeEventListener("keydown", handleKey)
      }
   }, [])

   return (
      <StyledDiv role="dialog">
         <div ref={modalRef}>
            <div>
               <h2>Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               {
                  cartList.length === 0 ?
                     <p>Você ainda não possui nenhum produto no carrinho</p> :
                     (
                        <ul>
                           {productList.map((product) => (
                              cartFunction(product)
                           ))}
                        </ul>
                     )
               }
            </div>
            <div>
               <div>
                  <span>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => setCartList([])}>Remover todos</button>
            </div>
         </div>
      </StyledDiv>
   );
};
