import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { useEffect } from "react";

export const Header = ({ setIsOpen, cartList, productList, value, setValue, setFilteredProduct }) => {
   let filtered
   useEffect(() => {
      filtered = productList.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
      setFilteredProduct(filtered)
   }, [value])


   
   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span>{cartList.length}</span>
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
         </div>
      </header>
   );
};
