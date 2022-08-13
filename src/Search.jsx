import {ICON_SEARCH} from './constants';

function Search() {
    return (
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref={ICON_SEARCH}/>
            </svg>
            <input className="search__text" type="search" placeholder="Поиск" name="search" />
        </div>
    );
}

export default Search;