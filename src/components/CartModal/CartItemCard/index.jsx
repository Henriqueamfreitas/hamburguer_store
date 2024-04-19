import { StyledH3, StyledSpan } from "../../../styles/typography";
import { StyledCartCard } from "./style";

export const CartItemCard = ({ product, setCartList, cartList }) => {
   const addProduct = (product) => {
      setCartList([...cartList, product])
  }

  const removeProduct = (removingId) => {
      let remainingProducts = cartList.filter(prod => prod.id !== removingId)
      let filteredProduct = cartList.filter(prod => prod.id === removingId)
      filteredProduct.pop()
      if(filteredProduct.length > 0){
          for(let i=0; i<filteredProduct.length; i+=1){
              remainingProducts.push(filteredProduct[i])
          }
          setCartList(remainingProducts)
      } else{
          setCartList(remainingProducts)
      }
  }

  const filteredProduct = cartList.filter(prod => prod.id === product.id)

   return (
      <StyledCartCard>
         <div className="cart__left">
            <img src={product.img} alt={product.name} />
            <div>
               <StyledH3>{product.name}</StyledH3>
               <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="green">
                  {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}
               </StyledSpan>
            </div>
         </div>
         <div className="cart__right">
            <button onClick={() => removeProduct(product.id)}>-</button>
               <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="grey600">
                  {filteredProduct.length}
               </StyledSpan>
            <button onClick={() => addProduct(product)}>+</button>
         </div>
      </StyledCartCard>
   );
};
