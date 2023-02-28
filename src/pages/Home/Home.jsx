import { Container, Footer, Main } from '../../ui/Container.styled';
import { Header } from '../../ui/Header.styled';
import { Logo, LogoSpan } from '../../ui/Logo.styled';
import { Button } from '../../ui/Button.styled';
import { Slogan } from '../../ui/Slogan.styled';
import { Image } from '../../ui/Image.styled';

import dogImg from '../../assets/img/black-dog.png';

const Home = () => {
	return (
		<Container>
			<Header>
				<Logo>
					doggies<LogoSpan>gromming</LogoSpan>
				</Logo>
			</Header>
			<Main>
				<Slogan>
					Clean dog,
					<br />
					is a happy dog
				</Slogan>
				<Button to='/login'>Enter</Button>
			</Main>
			<Footer>
				<Image src={dogImg} alt='dog image' />
			</Footer>
		</Container>
	);
};

export default Home;
