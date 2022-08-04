import authorsData from './authorsData.json';
import yearsData from './yearsData.json';
import genresData from './genresData.json';

function FilterPopup({ isPopupVisible, filterBy, coords}) {
    let content = '';

    if(filterBy === 'author') {
        content = authorsData.map((author) => <div className="popup__text" key={author.id}>{author.author}</div>);
    }
    if(filterBy === 'year') {
        content = yearsData.map((year) => <div className="popup__text" key={year.id}>{year.year}</div>);
    }
    if(filterBy === 'genre') {
        content = genresData.map((genre) => <div className="popup__text" key={genre.id}>{genre.genre}</div>);
    }

    

    const result = isPopupVisible ? (
        <div className="filter__popup" style={{top: coords.top, left: coords.left}}>
            { content }
        </div>
    ) : undefined;
    return result;
    }

export default FilterPopup;