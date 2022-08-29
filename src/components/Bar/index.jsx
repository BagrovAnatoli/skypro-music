import Controls from '../Controls';
import TrackPlay from '../TrackPlay';
import Volume from '../Volume';
import * as S from './styles';

function Bar() {
  return (
    <S.Content>
      <S.PlayerProgress />
      <S.PlayerBlock>
        <S.Player>
          <Controls />
          <TrackPlay />
        </S.Player>
        <Volume />
      </S.PlayerBlock>
    </S.Content>
  );
}

export default Bar;
