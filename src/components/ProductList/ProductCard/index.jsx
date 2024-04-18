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
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <div>
                    <button onClick={() => removeProduct(product.id)}>Remover</button>
                    <span>{filteredProduct.length}</span>
                    <button onClick={() => addProduct(product)}>Adicionar</button>
                </div>
            </div>
        </li>
    )
}