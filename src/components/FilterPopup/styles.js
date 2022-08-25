import styled from 'styled-components';

export const Text = styled.div`
    &{
        font-family: 'StratosSkyeng';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        cursor: pointer;
    }
    &:hover {
        -webkit-text-decoration-line: underline;
                text-decoration-line: underline;
        -webkit-font-feature-settings: 'pnum' on, 'lnum' on;
                font-feature-settings: 'pnum' on, 'lnum' on;
        color: #B672FF;
    }
`;

export const Popup = styled.div`
    position: absolute;
    top: 50px;
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
`;