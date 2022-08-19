import authorsData from '../../data/authorsData.json';
import yearsData from '../../data/yearsData.json';
import genresData from '../../data/genresData.json';
import * as S from './styles';

function FilterPopup({ isPopupVisible, filterBy, coords}) {
    let content = '';

    switch ( filterBy ) {
        case 'author':
            content = authorsData.map((author) => <S.PopupText key={author.id}>{author.author}</S.PopupText>);
            break;
        case 'year':
            content = yearsData.map((year) => <S.PopupText key={year.id}>{year.year}</S.PopupText>);
            break;
        case 'genre':
            content = genresData.map((genre) => <S.PopupText key={genre.id}>{genre.genre}</S.PopupText>);
            break;
        default:
            content = 'Пусто';
            break;
    }

    return isPopupVisible ? (
        <S.FilterPopup $top={coords.top} $left={coords.left}>
            { content }
        </S.FilterPopup>
        ) : null;
    }

export default FilterPopup;