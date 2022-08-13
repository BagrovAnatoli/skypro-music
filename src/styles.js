import styled, {css} from 'styled-components';

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
