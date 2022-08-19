import { useState, useEffect } from "react";
import IsLoadingContain from '../ContainSkeleton';
import {ICON_NOTE} from '../../constants';
import * as S from './styles';

function Contain() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    },[]);

    return (
        isLoading ? <IsLoadingContain /> : 
        <S.TrackPlayContain>
            <S.TrackPlayImage>
                <S.TrackPlaySvg alt="music">
                    <use xlinkHref={ICON_NOTE}/>
                </S.TrackPlaySvg>
            </S.TrackPlayImage>
            <S.TrackPlayAuthor>
                <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
            <S.TrackPlayAlbum>
                <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
            </S.TrackPlayAlbum>
        </S.TrackPlayContain>
    );
}

export default Contain;