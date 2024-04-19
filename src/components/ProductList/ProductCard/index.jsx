import { StyledH3, StyledSpan } from "../../../styles/typography"
import { StyledProductCard } from "./style"

export const ProductCard = ({ product, setCartList, cartList }) => {
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

    return(
        <StyledProductCard>
            <div className="imageContainer">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="prooductInfoContainer">
                <StyledH3>{product.name}</StyledH3>
                <StyledSpan fontSize=".75" fontWeight="400" lineheight="1" fontcolor="grey300" >
                    {product.category}
                </StyledSpan>
                <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="green">
                    {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}
                </StyledSpan>
                <div>
                    <button onClick={() => removeProduct(product.id)}>-</button>
                    <StyledSpan fontSize=".875" fontWeight="600" lineheight="1.5" fontcolor="grey600">
                        {filteredProduct.length}
                    </StyledSpan>
                    <button onClick={() => addProduct(product)}>+</button>
                </div>
            </div>
        </StyledProductCard>
    )
}