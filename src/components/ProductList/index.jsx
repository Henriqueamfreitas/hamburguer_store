import { ProductCard } from "./ProductCard";
import { StyledProductList } from "./style";

export const ProductList = ({ productList, cartList, setCartList, value, filteredProduct }) => {
   const list = value === "" ? productList : filteredProduct

   return (
      <StyledProductList>
         {list.map((product) => (
            <ProductCard key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>
         ))}
      </StyledProductList>
   );
};
