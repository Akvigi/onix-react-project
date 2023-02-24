import React from 'react';
import styled from 'styled-components';
import {respondTo} from '../../helpers/respondTo';

const SectionHeading = ({children}) => (
	<Head>{children}</Head>
);

const Head = styled.h2`
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    ${respondTo.lg`
        font-size: 32px;
        margin-bottom: 32px;
        text-align: start;
        padding-left: 15px;
    `}
`;

export default SectionHeading;

