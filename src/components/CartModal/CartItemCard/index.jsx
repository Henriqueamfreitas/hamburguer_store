import { StyledH3, StyledSpan } from "../../../styles/typography";

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
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <StyledH3>{product.name}</StyledH3>
            <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="green">
               {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}
            </StyledSpan>
         </div>
         <div>
            <button onClick={() => removeProduct(product.id)}>-</button>
               <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="grey600">
                  {filteredProduct.length}
               </StyledSpan>
            <button onClick={() => addProduct(product)}>+</button>
         </div>
      </li>
   );
};
