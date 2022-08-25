import Search from '../Search';
import Filters from '../Filters';
import Content from '../Content';
import * as S from './styles';

function CenterBlock() {
    return (
        <S.MainCenterBlock>
            <Search />
            <S.CenterBlockHead>Треки</S.CenterBlockHead>
            <Filters />
            <Content />
        </S.MainCenterBlock>
    );
}

export default CenterBlock;