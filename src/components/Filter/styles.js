import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const buttonTextActiveMixin = css`
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
`;

export const Button = styled.button`
  & {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    color: inherit;
    background-color: inherit;
    ${(props) => (props.$isActive ? `${buttonTextActiveMixin}` : ``)}
  }

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    ${buttonTextActiveMixin}
  }
`;
