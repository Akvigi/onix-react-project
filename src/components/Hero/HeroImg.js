import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const HeroImg = styled.img`
    margin: 25px 0;
    ${respondTo.sm`
        max-width: 400px;
    `}
    ${respondTo.mdSm`
        max-width: 525px;
    `}
`;

export default HeroImg;
