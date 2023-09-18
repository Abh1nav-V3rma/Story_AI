import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
    height: 60px;
    margin: 0px;
    border: 0px;
`

const MainTitle = styled.h1`
    text-align: center;
    background-color: red;
    border: 0px;
    margin: 5px 0px;
    font-size: 50px;
`

const Title = () => {
    return (
        <Wrapper>
            <MainTitle>
                Story AI
            </MainTitle>
        </Wrapper>
    )
}

export default Title;