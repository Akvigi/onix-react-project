import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const HeroHeader = styled.h1`
    font-weight: 600;
    font-size: 30px;
    ${respondTo.md`
        font-size: 48px;
    `}
`;

export default HeroHeader;
