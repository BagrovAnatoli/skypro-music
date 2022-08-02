/* eslint-disable no-console */
import {useState} from 'react';
import FilterPopup from './FilterPopup';


function Filter() {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [filterBy, setFilterBy] = useState();

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
            console.log('isPopupVisible', isPopupVisible);
        } else {
            setPopupVisible(true);
        }
    }

    const handleFilterClick = (event) => {
        const {target} = event;
        console.log('Клик');
        console.log(target);   
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
            <FilterPopup />
        </>
    );
}

export default Filter;