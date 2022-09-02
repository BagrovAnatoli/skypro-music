import {
  ICON_PREV,
  ICON_PLAY,
  ICON_NEXT,
  ICON_REPEAT,
  ICON_SHUFFLE,
  CONTROLS_SIZES,
} from '../../constants';
import PlayerBtn from '../PlayerBtn';

function Controls() {
  const controlBtnsValues = [
    { name: 'prev', alt: 'предыдущий трек', xlinkHref: ICON_PREV },
    { name: 'play', alt: 'проигрывать', xlinkHref: ICON_PLAY, cursor: true },
    { name: 'next', alt: 'следующий трек', xlinkHref: ICON_NEXT },
    {
      name: 'repeat',
      alt: 'повторить',
      xlinkHref: ICON_REPEAT,
      hoverIcon: true,
    },
    {
      name: 'shuffle',
      alt: 'перемешать',
      xlinkHref: ICON_SHUFFLE,
      hoverIcon: true,
    },
  ];

  return (
    <>
      {controlBtnsValues.map(({ name, alt, xlinkHref, cursor, hoverIcon }) => (
        <PlayerBtn
          name={name}
          alt={alt}
          xlinkHref={xlinkHref}
          width={CONTROLS_SIZES[name].width}
          heght={CONTROLS_SIZES[name].height}
          cursor={cursor}
          hoverIcon={hoverIcon}
          key={name}
        />
      ))}
    </>
  );
}

export default Controls;
