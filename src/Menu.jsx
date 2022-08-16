import menu from "./menuInfo.json";
import * as S from './styles';

function Menu() {

    const listItems = menu.map(({value, href, id}) => (
            <S.MenuItem key={id}>
                <S.MenuLink href={href}>{value}</S.MenuLink>
            </S.MenuItem>
        ))

    return (
        <div>
            <S.MenuList>
            { listItems }
            </S.MenuList>
        </div>
    );
}

export default Menu;