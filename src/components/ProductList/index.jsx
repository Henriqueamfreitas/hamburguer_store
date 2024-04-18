import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, cartList, setCartList, value, filteredProduct }) => {
   const list = value === "" ? productList : filteredProduct

   return (
      <ul>
         {list.map((product) => (
            <ProductCard key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>
         ))}
      </ul>
   );
};
