import { useSelector } from 'react-redux';
import { currentTrackIdSelector } from '../../store/selectors/catalog';
import MainPage from '../../components/MainPage';
import Bar from '../../components/Bar';
import * as S from './styles';

function Main() {
    const currentTrackId = useSelector(currentTrackIdSelector);
    return (
        <S.Container>
            <MainPage />
            {currentTrackId && <Bar/>}     
        </S.Container>
    );
}

export default Main;
