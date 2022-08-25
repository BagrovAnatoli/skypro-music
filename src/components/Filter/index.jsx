import * as S from './styles';
import FilterPopup from '../FilterPopup';

function Filter({type, visible, callback, children}) {

    const clickHandler = () => {
        callback(type);
    }
    


    return (
        <S.FilterWrapper>
            <S.FilterButton onClick={clickHandler} $isActive={visible}>{children}</S.FilterButton>
            <FilterPopup filterBy={type} isPopupVisible={visible}/>
        </S.FilterWrapper>
    );
}

export default Filter;