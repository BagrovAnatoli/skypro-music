import * as S from './styles';
import Popup from '../FilterPopup';

function Filter({ type, visible, callback, children }) {
  const clickHandler = () => {
    callback(type);
  };

  return (
    <S.Wrapper>
      <S.Button onClick={clickHandler} $isActive={visible}>
        {children}
      </S.Button>
      <Popup filterBy={type} isPopupVisible={visible} />
    </S.Wrapper>
  );
}

export default Filter;
