import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { StyledDiv } from "./style";
import { useEffect, useRef } from "react";
import { StyledH2, StyledSpan, StyledP } from "../../styles/typography";

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
         <div className="modal" ref={modalRef}>
            <div className="modal__header">
               <StyledH2>Carrinho de compras</StyledH2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className="modal__cartProducts">
               {
                  cartList.length === 0 ?
                     <StyledP>Você ainda não possui nenhum produto no carrinho</StyledP> :
                     (
                        <ul>
                           {productList.map((product) => (
                              cartFunction(product)
                           ))}
                        </ul>
                     )
               }
            </div>
            <div className="modal__summary">
               <div>
                  <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="grey600">Total</StyledSpan>
                  <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="grey300">
                     {total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                  </StyledSpan>
               </div>
               <button onClick={() => setCartList([])}>Remover todos</button>
            </div>
         </div>
      </StyledDiv>
   );
};
