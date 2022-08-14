import { useState, useEffect } from 'react';
import Personal from './Personal';
import sidebarDatas from './sidebarInfo.json';
import * as S from './styles';

function Sidebar() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    },[]);

    const loadingSidebarItems = [0,1,2].map((item) => (
        <S.SidebarItem $isLoading key={item}/>
    ));

    const sidebarItems = sidebarDatas.map(({href, imgSrc, imgAlt, id}) => (
        <S.SidebarItem key={id}>
            <S.SidebarLink href={href}>
                <S.SidebarImg
                    src={imgSrc} 
                    alt={imgAlt}  
                />
            </S.SidebarLink>
        </S.SidebarItem>
    ));

    return (
        <S.MainSidebar>
            <Personal name="Sergey.Ivanov"/>
            <S.SidebarBlock>
                <S.SidebarList>
                    {isLoading ? loadingSidebarItems : sidebarItems}
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
    );
}

export default Sidebar;