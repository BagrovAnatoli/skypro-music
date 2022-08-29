import styled, { css } from 'styled-components';
import { cursorPointer } from '../../styles';

const getBtnStyle = (btnName) => {
  const btnStyles = {
    prev: css`
      margin-right: 23px;
    `,
    play: css`
      margin-right: 23px;
    `,
    next: css`
      margin-right: 28px;
      fill: #a53939;
    `,
    repeat: css`
      margin-right: 24px;
    `,
    shuffle: css`
      display: flex;
      align-items: center;
    `,
  };
  return btnStyles[btnName];
};

const getBtnSvgStyle = (btnName) => {
  const btnSvgStyles = {
    prev: css`
      width: 15px;
      height: 14px;
    `,
    play: css`
      width: 22px;
      height: 20px;
      fill: #d9d9d9;
    `,
    next: css`
      width: 15px;
      height: 14px;
      fill: inherit;
      stroke: #d9d9d9;
    `,
    repeat: css`
      width: 18px;
      height: 12px;
      fill: transparent;
      stroke: #696969;
    `,
    shuffle: css`
      width: 19px;
      height: 12px;
      fill: transparent;
      stroke: #696969;
    `,
  };
  return btnSvgStyles[btnName];
};

export const PlayerBtn = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  fill: #d9d9d9;
  stroke: #ffffff;
  ${({ $btnName }) => getBtnStyle($btnName)}
  ${({ $cursor }) => $cursor && cursorPointer}
    ${({ $hoverIcon }) =>
    $hoverIcon &&
    `
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
  ${({ $btnName }) => getBtnSvgStyle($btnName)}
`;
