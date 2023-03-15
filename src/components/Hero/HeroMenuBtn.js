import styled from 'styled-components';

const HeroMenuBtn = styled.button`
    color: #F4AE26;
    font-size: 12px;
    font-weight: 700;
    background: transparent;
    cursor: pointer;
    &:hover, &:focus {
        color: black
    }
    @media screen and (max-width: 767px) {
        border: 1px #F4AE26 solid;
        padding: 13px 32px;
        border-radius: 50px;
    }
`;

export default HeroMenuBtn;
