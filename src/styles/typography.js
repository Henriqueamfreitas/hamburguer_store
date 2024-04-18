import styled from "styled-components"

export const StyledH2 = styled.h2`
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.75rem;
    color: var(--color-white);
`

export const StyledH3 = styled.h3`
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--color-grey600);
`

export const StyledP = styled.p`
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.75rem;
    color: var(--color-grey600);
`

export const StyledSpan = styled.span`
    font-family: "Inter", sans-serif;
    font-size: ${({fontSize}) => {
        switch(fontSize){
            case ".75":
                return ".75rem"
            case ".875":
                return ".875rem"
        }
    }};
    font-weight: ${({fontWeight}) => {
        switch(fontWeight){
            case "400":
                return "400"
            case "600":
                return "600"
        }
    }};
    line-height: ${({lineheight}) => {
        switch(lineheight){
            case "1":
                return "1rem"
            case "1.5":
                return "1.5rem"
        }
    }};
    color: ${({fontcolor}) => {
        switch(fontcolor){
            case "grey300":
                return "var(--color-grey300)"
            case "grey600":
                return "var(--color-grey600)"
            case "green":
                return "var(--color-primary)"
        }
    }};
`