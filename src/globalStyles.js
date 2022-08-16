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

  /*# sourceMappingURL=App.css.map */
`;