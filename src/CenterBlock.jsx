/* eslint-disable no-console */
import {useState} from 'react';
import Search from './Search';
import Filter from './Filter';
import Content from './Content';

function CenterBlock() {

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
        <div className="main__centerblock centerblock">
            <Search />
            {/* <h2 className="centerblock__h2">{filterBy} {isPopupVisible ? 'показать' : 'скрыть'}</h2> */}
            <h2 className="centerblock__h2">Треки</h2>
            <Filter handleFilterClick={handleFilterClick}/>
            <Content />
        </div>
    );
}

export default CenterBlock;