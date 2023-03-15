import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const HeroDesc = styled.div`
    max-width: 327px;
    align-self: center;
    margin: 0 auto;
    justify-content: center;
    text-align: center;

    ${respondTo.sm`
        margin: 0;
    `} 
    ${respondTo.md`
        max-width: 480px;
        text-align: start;
    `} 
`;

export default HeroDesc;
