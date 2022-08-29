import * as S from './styles';

function PlayerBtn({ name, alt, xlinkHref, cursor, hoverIcon }) {
  return (
    <S.PlayerBtn
      $btnName={name}
      $cursor={cursor}
      $hoverIcon={hoverIcon}
      key={name}
    >
      <S.PlayerBtnSvg $btnName={name} alt={alt}>
        <use xlinkHref={xlinkHref} />
      </S.PlayerBtnSvg>
    </S.PlayerBtn>
  );
}

export default PlayerBtn;
