import { MdDelete } from "react-icons/md";

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
            <h3>{product.name}</h3>
         </div>
         <div>
            <button onClick={() => removeProduct(product.id)}>Remover</button>
            <span>{filteredProduct.length}</span>
            <button onClick={() => addProduct(product)}>Adicionar</button>
         </div>
      </li>
   );
};
