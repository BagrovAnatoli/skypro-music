import {ICON_VOLUME} from '../../constants';
import * as S from './styles';

function Volume () {
    return (
        <S.BarVolume>
            <S.VolumeImage>
                <S.VolumeSvg alt="громкость">
                    <use xlinkHref={ICON_VOLUME}/>
                </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
            </S.VolumeProgress>
        </S.BarVolume>
    );
}

export default Volume;