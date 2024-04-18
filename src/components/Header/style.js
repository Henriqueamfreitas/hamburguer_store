import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--color-grey0);
    padding: 1rem 7vw;
    height: 7.75rem;
    button{
        span{
            background-color: var(--color-primary);
            width: 20px;
            padding: .25rem 0rem;
            border-radius: 0.4375rem;
            position: absolute;
            right: calc(7vw - 0.375rem);
            top: 1rem;
        }
    }
    form{
        width: 100%;
        display: flex;
        padding: .25rem .5rem;
        background-color: white;
        border-radius: .5rem;
    }
    input, button{
        border: none;
        background-color: transparent;
    }
    input{
        width: 100%;
        padding: 0;
    }
    input:focus{
        outline: none;
    }
`