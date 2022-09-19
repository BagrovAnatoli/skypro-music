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
    pause: css`
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
    prev: css``,
    play: css`
      fill: var(--controlButton);
    `,
    pause: css`
      fill: var(--controlButton);
    `,
    next: css`
      fill: inherit;
      stroke: var(--controlButton);
    `,
    repeat: css`
      fill: transparent;
      stroke: var(--controlButtonRegular);
    `,
    shuffle: css`
      fill: transparent;
      stroke: var(--controlButtonRegular);
    `,
  };
  return btnSvgStyles[btnName];
};

export const PlayerBtn = styled.button`
  background: none;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  fill: var(--controlButton);
  stroke: var(--controlButtonActive);
  ${({ $btnName }) => getBtnStyle($btnName)}
  ${({ $cursor }) => $cursor && cursorPointer}
    ${({ $hoverIcon }) =>
    $hoverIcon &&
    `
        &:hover svg{
            fill: transparent;
            stroke: var(--controlButtonHover);
            cursor: pointer;
        }
        &:active svg {
            fill: transparent;
            stroke: var(--controlButtonActive);
            cursor: pointer;
        }
    `}
`;

export const PlayerBtnSvg = styled.svg`
  ${({ $btnName }) => getBtnSvgStyle($btnName)}
  width: ${p => p.$width};
  height: ${p => p.$height};
`;
