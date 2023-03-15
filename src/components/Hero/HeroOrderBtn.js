import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const HeroOrderBtn = styled.button`
    font-size: 14px;
    padding: 13px 32px;
    border-radius: 50px;
    background-color: black;
    margin-right: 20px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    &:hover, &:focus {
        background: #F4AE26;
        color: black;
    }
    ${respondTo.xs`
        margin-right: 30px
    `}
`;

export default HeroOrderBtn;
