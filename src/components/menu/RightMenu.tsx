import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

export const RightMenu = () => {
    return (
        <StyledRightMenu>
            <ThemeButton><Icon iconId={'contrast'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/></ThemeButton>
            <ListItem>
                <Item><Link href=""><Icon iconId={'home'} width={'18'} height={'18'} viewBox={'0 0 18 18'} /></Link></Item>
                <Item><Link href=""><Icon iconId={'services'} width={'18'} height={'18'} viewBox={'0 0 18 18'} /></Link></Item>
                <Item><Link href=""><Icon iconId={'cv'} width={'18'} height={'18'} viewBox={'0 0 18 18'} /></Link></Item>
                <Item><Link href=""><Icon iconId={'portfolio'} width={'18'} height={'18'} viewBox={'0 0 18 18'} /></Link></Item>
                <Item><Link href=""><Icon iconId={'blog'} width={'18'} height={'18'} viewBox={'0 0 18 18'} /></Link></Item>
                <Item><Link href=""><Icon iconId={'contact'} width={'18'} height={'18'} viewBox={'0 0 18 18'} /></Link></Item>
            </ListItem>
        </StyledRightMenu>
    );
};

const StyledRightMenu = styled.nav`
    position: absolute;
    top: 0;
    right: 0;
    width: 108px;
    height: 1315px;
    padding: 50px 0;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const ListItem = styled.ul`
    li + li {
        margin-top: 43px;
    }
`

const Item = styled.li`
    position: relative;
    z-index: 1;
    text-align: center;

    &::before {
        content: "";
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: ${theme.colors.secondaryBg};
        border-radius: 50%;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        transform-origin: top left;
    }
`

const Link = styled.a`
    display: flex;
`

const ThemeButton = styled.button`
    margin-bottom: 174px;
`
