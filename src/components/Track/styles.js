import styled, { css } from 'styled-components';

const playSkeleton = css`
  background-color: #313131;
  width: 59px;
  height: 15px;
`;

export const PlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`;

export const PlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`;

export const PlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const PlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
  ${({ $isLoading }) => $isLoading && playSkeleton}
`;

export const PlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const PlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
  ${({ $isLoading }) => $isLoading && playSkeleton}
`;

export const PlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;
