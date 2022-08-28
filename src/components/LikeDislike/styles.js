import styled, {css} from 'styled-components';

export const LikeDislike = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`;


const active = css`
    &:active svg{
        fill: #696969;
        stroke: #FFFFFF;
        cursor: pointer;
    }
`;

const hover = css`
    &:hover svg{
        fill: transparent;
        stroke: #ACACAC;
        cursor: pointer;
    }
`;

export const Like = styled.div`
    padding: 5px;
    ${hover}
    ${active}
`;

export const Dislike = styled.div`
    padding: 5px;
    margin-left: 28.5px;
    ${hover}
    ${active}
`;

export const LikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const DislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`;
