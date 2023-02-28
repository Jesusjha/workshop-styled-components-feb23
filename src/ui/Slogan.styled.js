import styled from 'styled-components';

export const Slogan = styled.h2`
	margin-bottom: ${({formTitle}) => !formTitle ? '4rem' : ''};
	color: #ff8c22;
	font-size: ${({formTitle}) => formTitle ? '1.5rem' : '3rem'};
	font-weight: 700;
	line-height: ${({formTitle}) => !formTitle ? '3rem' : ''};
`;
