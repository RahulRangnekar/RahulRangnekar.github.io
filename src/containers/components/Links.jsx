import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IntLink = styled(Link)``;

const IntButtonLink = IntLink.extend``;

const ExtLink = styled.a``;

const ExtButtonLink = ExtLink.extend``;

export { IntLink, IntButtonLink, ExtLink, ExtButtonLink };
