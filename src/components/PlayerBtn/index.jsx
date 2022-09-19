import * as S from './styles';

function PlayerBtn({ name, alt, xlinkHref, width, height, cursor, hoverIcon, onClick }) {
  return (
    <S.PlayerBtn
      $btnName={name}
      $cursor={cursor}
      $hoverIcon={hoverIcon}
      key={name}
      onClick={onClick}
    >
      <S.PlayerBtnSvg $btnName={name} alt={alt} $width={width} $height={height}>
        <use xlinkHref={xlinkHref} />
      </S.PlayerBtnSvg>
    </S.PlayerBtn>
  );
}

export default PlayerBtn;
