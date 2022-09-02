import styled from 'styled-components';
import * as COLORS from '../../colors';

export const SidebarItem = styled.div`
  & {
    width: 250px;
    height: 150px;
  }
  &:not(:last-child) {
    margin-bottom: 30px;
  }

  ${(props) => props.$isLoading && `background-color: ${COLORS.skeleton};`}
`;

export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`;

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`;

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`;

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
