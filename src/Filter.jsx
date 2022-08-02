/* eslint-disable no-console */
import {useState} from 'react';
import FilterPopup from './FilterPopup';


function Filter() {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [filterBy, setFilterBy] = useState();
    const [popupCoords, setPopupCoords] = useState({top: 0, left: 0});

    const getFilterType = target => {
        if(target.classList.contains('button-author')){
            return 'author';
        }
        if(target.classList.contains('button-year')){
            return 'year';
        }
        if(target.classList.contains('button-genre')){
            return 'genre';
        }
        return undefined;
    }

    const popupVisibleUpdate = filterType => {
        if(filterType === filterBy){
            setPopupVisible(!isPopupVisible);
        } else {
            setPopupVisible(true);
        }
    }

    const getPopupCoords = (element) => {
        const left = element.offsetLeft;
        const bottom = element.offsetTop + element.offsetHeight;
        const space = 16;

        const popupTop = `${ bottom + space }px`;
        const popupLeft = `${ left }px`;
        return {top: popupTop, left: popupLeft};
    }

    const handleFilterClick = (event) => {
        const {target} = event;
        setPopupCoords(getPopupCoords(target));
        const filterType = getFilterType(target);
        setFilterBy(filterType);
        popupVisibleUpdate(filterType);     
    }

    return (
        <>
            <div className="centerblock__filter filter" onClick={handleFilterClick} aria-hidden="true">
                <div className="filter__title">Искать по:</div>
                <div className="filter__button button-author _btn-text">исполнителю</div>
                <div className="filter__button button-year _btn-text">году выпуска</div>
                <div className="filter__button button-genre _btn-text">жанру</div>
            </div>
            <FilterPopup isPopupVisible={isPopupVisible} filterBy={filterBy} coords={popupCoords}/>
        </>
    );
}

export default Filter;