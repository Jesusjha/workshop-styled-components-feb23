import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	p {
		margin-top: 0.5rem;
		color: ${({ theme }) => theme.colorPrimary};
	}
`;

export const Label = styled.label`
	margin: 0.3rem 0;
	color: ${({ theme }) => theme.colorPrimary};
	font-size: 0.92rem;
`;

export const Input = styled.input`
	width: 21rem;
	height: 3rem;
	border-radius: .7rem;
	padding: 0 0.5rem;
	border-color: ${({ theme }) => theme.colorPrimary};
  background-color: #f6f6f6;
	color: #030303;
	font-size: 1.2rem;
  outline: none;

  &:focus {
    border-color: ${({theme}) => theme.colorSecondary};
    background-color: #e5e5e5;
  }
`;
