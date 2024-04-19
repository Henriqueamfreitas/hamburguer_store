import styled from "styled-components"

export const StyledProductList = styled.ul`
    display: flex;
    margin: 1rem 7vw;
    min-height: 350px;
    gap: 1rem;
    overflow-x: scroll;
    padding-bottom: 1rem;

    @media (min-width: 741px){
        overflow-x: hidden;
        flex-wrap: wrap;
        gap: 1.9rem;
    }
`