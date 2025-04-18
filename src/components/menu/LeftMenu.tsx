import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/Profile.jpg';
import {Range} from "../range/Range";

export const LeftMenu = () => {
    return (
        <StyledLeftMenu>
            <ul>
                <li>
                    <Photo src={photo} alt="Photo Rayan Adlardard"/>
                    <h4>Rayan Adlardard</h4>
                    <p>Font-end Developer</p>
                </li>
                <li>Social</li>
                <li>Private information</li>
                <li>Languages</li>
                <li>Skills</li>
                <li>Extra Skills</li>
            </ul>
            <div>
                <h4>Languages</h4>
                <Range name={"Bangla"} value={100}/>
                <Range name={"English"} value={80}/>
                <Range name={"Spanish"} value={60}/>
            </div>
            <div>
                <h4>Skills</h4>
                <Range name={"Html"} value={90}/>
                <Range name={"CSS"} value={85}/>
                <Range name={"JS"} value={80}/>
                <Range name={"PHP"} value={75} />
                <Range name={"WordPress"} value={85} />
            </div>
        </StyledLeftMenu>
    );
};

const StyledLeftMenu = styled.nav`
    width: 305px;
    position: absolute;
    left: 0;
    top: 0;
    
    @media screen and (max-width: 970px) {
        
    }
`

const Photo = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`
