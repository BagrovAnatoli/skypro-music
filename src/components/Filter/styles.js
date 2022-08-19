import styled, {css} from 'styled-components';

export const FilterButtonTextActiveMixin = css`
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
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
