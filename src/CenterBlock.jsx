import Search from './Search';
import Filter from './Filter';
import Content from './Content';
import * as S from './styles';

function CenterBlock() {
    return (
        <S.MainCenterBlock>
            <Search />
            <S.CenterBlockH2>Треки</S.CenterBlockH2>
            <Filter />
            <Content />
        </S.MainCenterBlock>
    );
}

export default CenterBlock;