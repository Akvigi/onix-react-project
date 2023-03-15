import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const ContainerHero = styled.div`
    max-width: 740px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${respondTo.md`
      max-width: 950px;
    `}
    ${respondTo.lg`
      max-width: 1140px;
    `}
`;

export default ContainerHero;
