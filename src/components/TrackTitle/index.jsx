import {ICON_NOTE} from '../../constants';
import * as S from './styles';

function TrackTitle ( {image, text, link, spanText} ) {
    const imgAlt = image ? image.alt : "музыка";
    const imgPath = image ? image.path : ICON_NOTE;
    const textTitle = text || "";
    const linkTitle = link || "http://";

    
    return (
        <S.TrackTitle>
            <S.TrackTitleImage>
                <S.TrackTitleSvg alt={imgAlt}>
                    <use xlinkHref={imgPath}/>
                </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <div>
                <S.TrackTitleLink href={linkTitle}>
                    {textTitle} <S.TrackTitleSpan>{spanText}</S.TrackTitleSpan>
                </S.TrackTitleLink>
            </div>
        </S.TrackTitle>
    );
}

export default TrackTitle;