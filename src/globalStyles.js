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
  /*# sourceMappingURL=App.css.map */
`;