import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>&#169; 2021 All Rights Reserved.Ojjomedia</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    text-align: center;
    max-width: 970px;
    width: 100%;
    margin-left: 335px;
    background-color: white;
    padding: 5px;
`

const Copyright = styled.p``