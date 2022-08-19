import * as S from './styles';

function TrackAuthor ( {text, link} ) {
    const author = text || '';
    const linkAuthor = link || 'http://';
    return (
        <S.TrackAuthor>
            <S.TrackAuthorLink href={linkAuthor}>{author}</S.TrackAuthorLink>
        </S.TrackAuthor>
    );
}

export default TrackAuthor;