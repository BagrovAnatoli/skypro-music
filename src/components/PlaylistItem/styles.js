import styled from 'styled-components';

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


export const TrackTitleTextLoading = styled.svg`
    width: 356px;
    height: 19px;
    background-color: #313131;
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

export const TrackAlbum = styled.div`
    width: 245px;
    ${(props) => props.$isLoading &&
        `height: 19px;
        background-color: #313131;`}
`;

export const PlaylistItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`;