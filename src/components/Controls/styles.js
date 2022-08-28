import styled, {css} from 'styled-components';
import {cursorPointer} from '../../styles';


const getBtnStyle = (btnName) => {
    const btnStyles = {
        prev: css`
            margin-right: 23px;
        `,
        play:  css`
            margin-right: 23px;
        `,
        next:  css`
            margin-right: 28px;
            fill: #a53939;
        `,
        repeat: css`
            margin-right: 24px;
        `,
        shuffle: css`
            display: flex;
            align-items: center;
        `
    };
    return btnStyles[btnName];
}

const getBtnSvgStyle = (btnName) => {
    const btnSvgStyles = {
        play:  css`
            fill: #D9D9D9;
        `,
        next:  css`
            fill: inherit;
            stroke: #D9D9D9;
        `,
        repeat: css`

            fill: transparent;
            stroke: #696969;
        `,
        shuffle: css`
            fill: transparent;
            stroke: #696969;
        `
    };
    return btnSvgStyles[btnName];
}

export const PlayerBtn = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    fill: #D9D9D9;
    stroke: #FFFFFF;
    width: ${({width}) => width};
    width: ${({height}) => height};
    ${({$btnName}) => getBtnStyle($btnName)}
    ${({$cursor}) => $cursor && cursorPointer}
    ${({$hoverIcon}) => $hoverIcon && `
        &:hover svg{
            fill: transparent;
            stroke: #ACACAC;
            cursor: pointer;
        }
        &:active svg {
            fill: transparent;
            stroke: #FFFFFF;
            cursor: pointer;
        }
    `}
`;

export const PlayerBtnSvg = styled.svg`
    ${({$btnName}) => getBtnSvgStyle($btnName)}
`;
