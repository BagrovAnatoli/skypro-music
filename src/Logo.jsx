import logo from './img/logo.png';
import * as S from './styles';

function Logo() {
    return (
        <S.NavLogo>
            <S.LogoImage src={logo} alt="logo" />
        </S.NavLogo>
    );
}
  
export default Logo;