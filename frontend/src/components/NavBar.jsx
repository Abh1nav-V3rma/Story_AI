import React from "react";

import { styled } from "styled-components";

const Wrapper = styled.div`
    margin: 10px;
    display: flex;
`

const NavList = styled.div`
    width: 750px;
    display: flex;
    text-align: left;
    justify-content: flex-end;
`

const NavElement = styled.span`
    font-size: 22px;
    flex : 1;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Wrapper>
            <NavList>
                <NavElement>
                    Create
                </NavElement>
                <NavElement>
                    Leaderboard
                </NavElement>
                <NavElement>
                    About
                </NavElement>
            </NavList>
        </Wrapper>
    )
}

export default Navbar;
