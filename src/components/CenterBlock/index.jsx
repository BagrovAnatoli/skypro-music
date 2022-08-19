import Search from '../Search';
import Filter from '../Filter';
import Content from '../Content';
import * as S from './styles';

function CenterBlock() {
    return (
        <S.MainCenterBlock>
            <Search />
            <S.CenterBlockHead>Треки</S.CenterBlockHead>
            <Filter />
            <Content />
        </S.MainCenterBlock>
    );
}

export default CenterBlock;