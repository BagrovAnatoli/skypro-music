import styled from 'styled-components';
import * as COLORS from '../../colors';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: ${COLORS.line};
`;

export const PlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
