import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	width: 100%;
  /* z-index: 10; */
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 30rem;
	background-color: transparent;
  z-index: 1;

	&.login {
    /* justify-content: center; */
    height: 22rem;
	}
`;

export const Footer = styled.footer`
  position: relative;
	display: flex;
	align-items: flex-end;
`;
