import styled, { css } from 'styled-components';
import * as COLORS from './colors';

export const cursorPointer = css`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${COLORS.background3};
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: ${COLORS.background1};
`;

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;
