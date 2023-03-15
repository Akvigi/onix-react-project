import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const HeroSection = styled.section`
    padding: 20px 0 45px 0;
    background-color: #F6EBDA;
    ${respondTo.lg`
        padding: 82px 0 85px 0;
        display: flex;
        width: 100%;
    `}`;

export default HeroSection;
