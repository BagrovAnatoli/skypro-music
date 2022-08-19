import logo from '../../img/logo.png';
import * as S from './styles';

function Logo() {
    return (
        <S.NavLogo>
            <S.LogoImage src={logo} alt="логотип" />
        </S.NavLogo>
    );
}
  
export default Logo;