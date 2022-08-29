import { ICON_NOTE } from '../../constants';
import * as S from './styles';

function TrackTitle({ image, text, link, spanText }) {
  const imgAlt = image ? image.alt : 'музыка';
  const imgPath = image ? image.path : ICON_NOTE;
  const textTitle = text || '';
  const linkTitle = link || 'http://';

  return (
    <S.Title>
      <S.TitleImage>
        <S.Svg alt={imgAlt}>
          <use xlinkHref={imgPath} />
        </S.Svg>
      </S.TitleImage>
      <div>
        <S.Link href={linkTitle}>
          {textTitle} <S.Span>{spanText}</S.Span>
        </S.Link>
      </div>
    </S.Title>
  );
}

export default TrackTitle;
