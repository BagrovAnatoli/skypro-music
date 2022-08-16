/* eslint-disable no-console */
import styled, {css} from 'styled-components';
import {colsWidth} from './constants';

const cursorPointer = css`cursor: pointer;`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`;

export const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`;

export const Main = styled.div`
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
        flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
        justify-content: space-between;
`;

export const MainNav = styled.div`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`;

export const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`;

export const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    cursor: pointer;
`;

export const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #D3D3D3;
`;

export const NavMenu = styled.div`
    display: block;
    visibility: visible;
`;

export const LogoImage = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`;

export const MainCenterBlock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
        -ms-flex-positive: 3;
            flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;

export const CenterBlockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

export const CenterBlockH2 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;

export const CenterBlockFilter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;

export const FilterButton = styled.div`
    & {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #FFFFFF;
        border-radius: 60px;
        padding: 6px 20px;
    }
  
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export const FilterButtonTextActiveMixin = css`
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
`;

export const FilterButtonText = styled(FilterButton)`
    ${(props) => props.$isActive ? `${FilterButtonTextActiveMixin}` : ``}

    &:hover {
        border-color: #D9B6FF;
        color: #D9B6FF;
        cursor: pointer;
    }

    &:active {
        ${FilterButtonTextActiveMixin}
    }
`;

export const CenterBlockContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`;

export const SearchText = styled.input`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
        flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;

export const ContentTitle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
    width: ${(props) => colsWidth[Number(props.$col)-1].width};
    ${(props) => props.$col==="4" && `text-align: end;`}
`;

export const PlayistTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const ContentPlaylist = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    overflow-y: auto;
`;

export const PlaylistItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

export const TrackTitle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 447px;
`;

export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`;

export const TrackTitleTextLoading = styled.svg`
    width: 356px;
    height: 19px;
    background-color: #313131;
`;

export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;

export const TrackTitleSpan = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4E4E4E;
`;

export const TrackAuthor = styled.div`
    width: 321px;
    ${(props) => props.$isLoading ?
        `height: 19px;
        background-color: #313131;` :
        `display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;`}
`;

export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    text-align: left;
`;

export const TrackAlbum = styled.div`
    width: 245px;
    ${(props) => props.$isLoading &&
        `height: 19px;
        background-color: #313131;`}
`;

export const TrackAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`;

export const MainSidebar = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`;

export const SidebarPersonal = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    padding: 12px 0 15px 0;
`;

export const SidebarPersonalName = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-right: 16px;
`;

export const SidebarAvatar = styled.div`
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
`;

export const SidebarBlock = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`;

export const SidebarList = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

export const SidebarItem = styled.div`
&{
    width: 250px;
    height: 150px;
}
&:not(:last-child) {
    margin-bottom: 30px;
}

${(props) => props.$isLoading && 'background-color: #313131;'}
`;

export const SidebarLink = styled.a`
    width: 100%;
    height: 100%;
`;

export const SidebarImg = styled.img`
    width: 100%;
    height: auto;
`;

export const BarContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2E2E2E;
`;

export const BarPlayerBlock = styled.div`
    height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
`;

export const BarPlayer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`;

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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
        `
    };
    return btnStyles[btnName];
}

export const PlayerBtn = styled.div`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    fill: #D9D9D9;
    stroke: #FFFFFF;
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

const getBtnSvgStyle = (btnName) => {
    const btnSvgStyles = {
        prev: css`
            width: 15px;
            height: 14px;
        `,
        play:  css`
            width: 22px;
            height: 20px;
            fill: #D9D9D9;
        `,
        next:  css`
            width: 15px;
            height: 14px;
            fill: inherit;
            stroke: #D9D9D9;
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
        `
    };
    return btnSvgStyles[btnName];
}

export const PlayerBtnSvg = styled.svg`
    ${({$btnName}) => getBtnSvgStyle($btnName)}
`;

export const TrackPlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
`;

export const TrackPlayContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
        grid-template-columns: auto 1fr;
        grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;
`;

export const TrackPlaySvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`;

const trackPlayLoading = css`
    background-color: #313131;
    width: 59px;
    height: 15px;
`;

export const TrackPlayAuthor = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
    ${({$isLoading}) => $isLoading && trackPlayLoading}
`;

export const TrackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
    ${({$isLoading}) => $isLoading && trackPlayLoading}
`;

export const TrackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
`;

export const TrackPlayLikeDis = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-left: 26%;
`;

const likeDislikeActive = css`
    &:active svg{
        fill: #696969;
        stroke: #FFFFFF;
        cursor: pointer;
    }
`;

const likeDislikeHover = css`
    &:hover svg{
        fill: transparent;
        stroke: #ACACAC;
        cursor: pointer;
    }
`;

export const TrackPlayLike = styled.div`
    padding: 5px;
    ${likeDislikeHover}
    ${likeDislikeActive}
`;

export const TrackPlayDislike = styled.div`
    padding: 5px;
    margin-left: 28.5px;
    ${likeDislikeHover}
    ${likeDislikeActive}
`;

export const TrackPlayLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const TrackPlayDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`;

export const BarVolume = styled.div`
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 92px 0 0;
`;

export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`;

export const VolumeProgress = styled.div`
width: 109px;
${cursorPointer}
`;

export const VolumeProgressLine = styled.input`
width: 109px;
${cursorPointer}
`;