import styled from "styled-components"

export const StyledDiv = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.25);

    div{
        background-color: white;
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        padding: 2rem;
    }
`