import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export const ButtonTextActiveMixin = css`
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
`;

export const Button = styled.button`
    & {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #FFFFFF;
        border-radius: 60px;
        padding: 6px 20px;
        color: inherit;
        background-color: inherit;
        ${(props) => props.$isActive ? `${ButtonTextActiveMixin}` : ``}
    }

    &:hover {
        border-color: #D9B6FF;
        color: #D9B6FF;
        cursor: pointer;
    }

    &:active {
        ${ButtonTextActiveMixin}
    }
`;
