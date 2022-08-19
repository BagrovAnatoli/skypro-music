import styled from 'styled-components';
import {cursorPointer} from '../../styles';

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