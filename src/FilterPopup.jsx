import authorsData from './authorsData.json';
import yearsData from './yearsData.json';
import genresData from './genresData.json';

function FilterPopup({ isPopupVisible, filterBy, coords}) {
    let content = '';

    switch ( filterBy ) {
        case 'author':
            content = authorsData.map((author) => <div className="popup__text" key={author.id}>{author.author}</div>);
            break;
        case 'year':
            content = yearsData.map((year) => <div className="popup__text" key={year.id}>{year.year}</div>);
            break;
        case 'genre':
            content = genresData.map((genre) => <div className="popup__text" key={genre.id}>{genre.genre}</div>);
            break;
        default:
            content = 'Пусто';
            break;
    }

    return isPopupVisible ? (
        <div className="filter__popup" style={{top: coords.top, left: coords.left}}>
            { content }
        </div>
        ) : null;
    }

export default FilterPopup;