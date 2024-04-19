import styled from "styled-components"

export const StyledProductCard = styled.li`
    border: solid 2px var(--color-grey100);
    background-color: transparent;
    min-width: clamp(0px, 70vw, 300px);
    border-radius: 0.3125rem;
    .imageContainer{
        background-color: var(--color-grey0);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 177px;
        height: 177px;
        background-color: transparent;
    }

    .prooductInfoContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 217px);
        padding: 1.5rem 1rem 1rem 1rem;
        div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .75rem;
        }
        button{
            border: none;
            background-color: transparent;
            font-family: "Inter", sans-serif;
            font-size: 1rem;
            font-weight: 900;
            line-height: 1rem;
            color: var(--color-grey600);
        }
    }
`