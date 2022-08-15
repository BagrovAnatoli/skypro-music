import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-family: 'StratosSkyeng';
    src: local("StratosSkyeng"), local("StratosSkyeng"), url("./fonts/StratosSkyeng.woff2") format("woff2"), url("./fonts/StratosSkyeng.woff") format("woff"), url("./fonts/StratosSkyeng.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
  }
  
  // ._btn-icon:hover svg {
  //   fill: transparent;
  //   stroke: #ACACAC;
  //   cursor: pointer;
  // }
  
  ._btn-icon:active svg {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;
  }
  
  ._btn-icon:active .track-play__like-svg,
  ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #FFFFFF;
    cursor: pointer;
  }
  
  .menu__list {
    padding: 18px 0 10px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 20px;
  }
  
  .menu__item {
    padding: 5px 0;
    margin-bottom: 16px;
  }
  
  .menu__link {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'StratosSkyeng';
  }
  
  .search__text::-webkit-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  .search__text:-ms-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  .search__text::-ms-input-placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  .search__text::placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  
  .filter__popup {
    position: absolute;
    width: 424px;
    background: #313131;
    border-radius: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    gap: 34px;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 34px;
  }
  
  .popup__text {
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
  }
  
  .popup__text:hover {
    -webkit-text-decoration-line: underline;
            text-decoration-line: underline;
    -webkit-font-feature-settings: 'pnum' on, 'lnum' on;
            font-feature-settings: 'pnum' on, 'lnum' on;
    color: #B672FF;
  }
  
  .track__time-svg {
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
  }
  
  .track__time-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
  }
  
  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
  }
      
  .bar__volume-block {
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 92px 0 0;
  }
  
  .player__controls {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    padding: 0 27px 0 31px;
  }
  
  .player__track-play {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  
  .track-play__contain {
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
        grid-template-columns: auto 1fr;
        grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  
  .track-play__image {
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
  }
  
  .track-play__svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
  }
  
  .track-play__author {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
  }
  
  .track-play__author-link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
  }
  
  .track-play__album {
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
  }
  
  .track-play__album-link {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
  }
  
  .track-play__author_loading, .track-play__album_loading {
    background-color: #313131;
    width: 59px;
    height: 15px;
  }
  
  .track-play__like-dis {
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
  }
  
  .track-play__like, .track-play__dislike {
    padding: 5px;
  }
  
  .track-play__like-svg {
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
  
  .track-play__dislike {
    margin-left: 28.5px;
  }
  
  .track-play__dislike-svg {
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
  }
  
  .volume__content {
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
            justify-content: end;
  }
  
  .volume__image {
    width: 13px;
    height: 18px;
    margin-right: 17px;
  }
  
  .volume__svg {
    width: 13px;
    height: 18px;
    fill: transparent;
  }
  
  .volume__progress {
    width: 109px;
  }
  
  .volume__progress-line {
    width: 109px;
  }
  /*# sourceMappingURL=App.css.map */
`;