import { useState, useEffect } from 'react';
import TrackTitle from "../TrackTitle";
import TrackAuthor from "../TrackAuthor";
import TrackAlbum from "../TrackAlbum";
import TrackTime from "../TrackTime";
import * as S from './styles';

function PlaylistItem ( {title, author, album, time} ) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    },[]);

    const loadingTrack = (
        <S.PlaylistTrack>
            <S.TrackTitle>
                <S.TrackTitleImage/>
                <S.TrackTitleTextLoading/>
            </S.TrackTitle>
            <S.TrackAuthor $isLoading/>
            <S.TrackAlbum $isLoading/>
        </S.PlaylistTrack>
    );

    const loadedTrack = (
        <S.PlaylistTrack>
            <TrackTitle image={title.image} text={title.text} link={title.link} spanText={title.spanText}/>
            <TrackAuthor text={author.text} link={author.link}/>
            <TrackAlbum text={album.text} link={album.link}/>
            <TrackTime text={time.text}/>
        </S.PlaylistTrack>
    );

    return (
        <S.PlaylistItem>
            {isLoading ? loadingTrack : loadedTrack}
        </S.PlaylistItem>
    );
}

export default PlaylistItem;