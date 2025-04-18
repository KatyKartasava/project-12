import React from 'react';
import styled from "styled-components";
import {RightMenu} from "../../components/menu/RightMenu";
import {LeftMenu} from "../../components/menu/LeftMenu";
import {Container} from "../../components/Container";


export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <LeftMenu />
                <RightMenu />
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
    nav {
        background-color: white;
    }
    display: flex;
    justify-content: space-between;
    position: relative;
`
