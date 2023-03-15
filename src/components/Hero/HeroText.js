import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const HeroText = styled.p`
    font-size: 16px;
    margin-bottom: 16px;   
    font-weight: 400;
    color: #7E7D7A;
    ${respondTo.md`
        font-size: 18px;
        margin: 24px 0 32px 0;
    `}
`;

export default HeroText;
