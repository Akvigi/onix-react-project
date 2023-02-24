import React from 'react';
import styled from 'styled-components';
import {respondTo} from '../../../helpers/respondTo';

const HeaderLink = ({href, textL}) => (
	<Link href={href}>{textL}</Link>
);

const Link = styled.a`
    color: rgb(0, 0, 0);
    font-size: 14px;
    ${respondTo.xs`
        font-size: 16px;
    `}
    ${respondTo.sm`
        font-size: 20px;
    `}
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export default HeaderLink;
