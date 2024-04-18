import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { useEffect } from "react";
import { StyledHeader } from "./style";
import { StyledSpan } from "../../styles/typography";

export const Header = ({ setIsOpen, cartList, productList, value, setValue, setFilteredProduct }) => {
   let filtered
   useEffect(() => {
      filtered = productList.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
      setFilteredProduct(filtered)
   }, [value])



   return (
      <StyledHeader>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <button onClick={() => setIsOpen(true)}>
            <MdShoppingCart size={21} />
            <StyledSpan fontSize=".875" fontWeight="900" lineheight="1" fontcolor="white">
               {cartList.length}
            </StyledSpan>
         </button>
         <form>
            <input
               type="text"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">
               <MdSearch size={21} />
            </button>
         </form>
      </StyledHeader>
   );
};
