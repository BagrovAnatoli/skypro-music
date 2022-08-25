import Search from '../Search';
import Filters from '../Filters';
import Content from '../Content';
import * as S from './styles';

function CenterBlock() {
    return (
        <S.Container>
            <Search />
            <S.Head>Треки</S.Head>
            <Filters />
            <Content />
        </S.Container>
    );
}

export default CenterBlock;