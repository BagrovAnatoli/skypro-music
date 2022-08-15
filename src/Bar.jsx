import Controls from './Controls';
import TrackPlay from './TrackPlay';
import Volume from './Volume';
import * as S from './styles';

function Bar() {
    return (
        <S.BarContent>
            <S.BarPlayerProgress />
            <S.BarPlayerBlock>
                <S.BarPlayer>
                    <Controls />
                    <TrackPlay />
                </S.BarPlayer>
                <Volume />
            </S.BarPlayerBlock>
        </S.BarContent>
    );
}

export default Bar;