import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, cartList, setCartList }) => {

   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>
         ))}
      </ul>
   );
};
