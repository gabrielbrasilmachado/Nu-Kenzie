import styled, { css } from "styled-components";

export const StyledLi = styled.li`
    height: 85px;
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-1);
    border-radius: 4px;
    padding: 1rem;
    text-overflow: ellipsis;
    transition: 0.5s ease;

     &:hover{
        background-color: var(--white);
        -webkit-box-shadow: 0px 0px 24px -9px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 24px -9px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 24px -9px rgba(0, 0, 0, 0.75);
        transition: 0.5s ease;
     }
    
    ${props => props.type === 'entry' && css`
        border-left: 5px solid var(--color-secondary);
    `}
    ${props => props.type === 'output' && css`
        border-left: 5px solid var(--grey-2);
    `}

    div{
        height: 100%;
        width: 50%;
        gap: 1rem;
        text-overflow: ellipsis;
    }

    .textsDiv{
        display: flex;
        flex-direction: column;
    }

    .valueDiv {
        display: flex;
        justify-content: space-around;
    }

    h2 {
        height: 80%;
        font-family: var(--font-family-nunito);
        font-size: 16px;
        font-weight: 700;
        color: var(--grey-4);
    }

    span {
        font-family: var(--font-family-nunito);
        font-size: 12px;
        color: var(--grey-3);
    }

    p {
        font-family: var(--font-family-nunito);
        font-size: 12px;
        color: var(--grey-4);
    }

    div button {
        height: 22px;
        width: 22px;
        border: none;
        background-color: var(--grey-2);
        color: var(--grey-4);
        border-radius: 2.5px;
        cursor: pointer;
    }

    div button:hover{
        background-color: var(--grey-4);
        color: var(--grey-2);
    }

    @media (min-width: 768px) {
    h2 {
        overflow: visible;
    }

    .textsDiv {
        width: 70%;
        display: flex;
        flex-direction: column;
    }

    .valueDiv {
        display: flex;
        justify-content: flex-end;
        gap: 3rem;
    }
}
`