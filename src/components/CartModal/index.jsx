import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { ProductCard } from "../ProductList/ProductCard";

export const CartModal = ({ productList, cartList, setCartList }) => {
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

   return (
      <div role="dialog">
         <div>
            <h2>Carrinho de compras</h2>
            <button aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>
         </div>
         <div>
            {
               cartList.length ===0 ?
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
            <button>Remover todos</button>
         </div>
      </div>
   );
};
