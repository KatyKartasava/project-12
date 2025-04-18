import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type EducationProps = {
    center: string
    position: string
    period: string
    name: string
    description: string
};

export const Experience = (props: EducationProps) => {
    return (
        <StyledExperience>
            <RightPart>
                <NameCenter>{props.center}</NameCenter>
                <Position>{props.position}</Position>
                <Period>{props.period}</Period>
            </RightPart>
            <LeftPart>
                <CertificateName>{props.name}</CertificateName>
                <CertificateDescription>{props.description}</CertificateDescription>
            </LeftPart>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
    display: flex;
    justify-content: space-between;
    
    & + div {
        margin-top: 38px;
    }
`

const RightPart = styled.div`
    width: 240px;
`

const NameCenter = styled.h3`
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 25px;
`

const Position = styled.span`
    font-size: 15px;
    text-transform: capitalize;
    margin-right: 21px;
`

const Period = styled.span`
    padding: 4px 7px;
    background-color: ${theme.colors.accent};
    font-size: 10px;
    color: ${theme.colors.primaryBg};
`

const LeftPart = styled.div`
    width: 536px;
`

const CertificateName = styled.h3`
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 25px;
`

const CertificateDescription = styled.p``