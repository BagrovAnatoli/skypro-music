// import styled from 'styled-components';
import {useState} from 'react';
import FilterPopup from '../FilterPopup';
import {BUTTON_POPUP_SPACE, TRACK_FILTERS} from '../../constants';
import * as S from './styles';

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

    const getPopupCoords = (element) => {
        const left = element.offsetLeft;
        const bottom = element.offsetTop + element.offsetHeight;

        const popupTop = `${ bottom + BUTTON_POPUP_SPACE }px`;
        const popupLeft = `${ left }px`;
        return {top: popupTop, left: popupLeft};
    }

    const handleFilterClick = (event) => {
        const {target} = event;
        if (!target.classList.contains('filter__button')) return;
        setPopupCoords(getPopupCoords(target));
        const filterType = getFilterType(target);
        setFilterBy(filterType);
        setPopupVisible((prevState) => filterType !== filterBy || !prevState);    
    }

    const getActive = (filterType) => !!(isPopupVisible && (filterBy === filterType));

    const filtersElements = TRACK_FILTERS.map(({id, type, text}) => (
        <S.FilterButtonText className={`filter__button button-${type}`} $isActive={getActive(type)} key={id}>
            {text}
        </S.FilterButtonText>
    ));

    return (
        <>
            <S.CenterBlockFilter onClick={handleFilterClick} aria-hidden="true">
                <S.FilterTitle>Искать по:</S.FilterTitle>
                {filtersElements}
            </S.CenterBlockFilter>
            <FilterPopup isPopupVisible={isPopupVisible} filterBy={filterBy} coords={popupCoords}/>
        </>
    );
}

export default Filter;