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
        text-decoration-line: underline;
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
    display: flex;
    flex-wrap: wrap;
    gap: 34px;
    align-items: center;
    padding: 34px;
`;