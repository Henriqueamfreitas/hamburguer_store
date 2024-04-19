import styled from "styled-components"

export const StyledCartCard = styled.li`
    display: flex;
    /* width: 300px; */
    justify-content: space-between;
    align-items: center;
    img{
        width: 55px;
        height: 53.49px;
        background-color: var(--color-grey100);
        border-radius: 0.3125rem;
        padding: .35rem;
    }

    .cart__left{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-align: start;
        gap: clamp(.5rem, 3vw, 1rem);
    }

    .cart__right{
        display: flex;
        flex-direction: row;
        width: fit-content;
        button{
            background-color: transparent;
            border: none;
        }
    }
`