import { Button } from '../../ui/Button.styled';
import { Container, Footer, Main } from '../../ui/Container.styled';
import { Form, Input, Label } from '../../ui/Forms.styled';
import { Header } from '../../ui/Header.styled';
import { Image } from '../../ui/Image.styled';
import { Logo, LogoSpan } from '../../ui/Logo.styled';
import { Slogan } from '../../ui/Slogan.styled';
import dogImg from '../../assets/img/black-dog.png';
import { LinkForm } from '../../ui/Links.styled';

import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<Container>
			<Header>
				<Logo>
					doggies
					<LogoSpan>grooming</LogoSpan>
				</Logo>
			</Header>
			<Main>
				<Form>
					<Slogan formTitle>Create your profile</Slogan>
					<Label>Email</Label>
					<Input type='email' name='email' />
					<Label>Password</Label>
					<Input type='password' name='password' />
					<Label>Repeat password</Label>
					<Input type='password' name='repeatpassword' />
          <p>Do not have an account? <LinkForm as={Link} to='/login'>Login</LinkForm></p>
				</Form>
        <Button className='login__button'>
          Sign up
        </Button>
			</Main>
      <Footer>
        <Image className='image--opacity' src={dogImg} />
      </Footer>
		</Container>
	);
};

export default Register;
