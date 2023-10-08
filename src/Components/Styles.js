import React from 'react'
import styled from 'styled-components';

const Styles = () => {
    return (
        <Wrapper>
            <Logo>text</Logo>
        </Wrapper>
    )
}

export default Styles;

const Logo = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`