import { Container, Footer, Main } from '../../ui/Container.styled';
import { Header } from '../../ui/Header.styled';
import { Logo, LogoSpan } from '../../ui/Logo.styled';
import { Button } from '../../ui/Button.styled';
import { Slogan } from '../../ui/Slogan.styled';
import { Image } from '../../ui/Image.styled';
import { Form, Input, Label } from '../../ui/Forms.styled';
import dogImg from '../../assets/img/black-dog.png';
import { LinkForm } from '../../ui/Links.styled';

import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<Container>
			<Header>
				<Logo>
					doggies<LogoSpan>grooming</LogoSpan>
				</Logo>
			</Header>
      <Main className='login'>
        <Form>
        <Slogan formTitle>Enter the salon</Slogan>
          <Label>Email</Label>
          <Input type="email" name="email" />
          <Label>Password</Label>
          <Input type="password" name="password" />
          <p>Do not have an account? <LinkForm as={Link} to='/register'>Register</LinkForm></p>
        </Form>
          <Button className='login__button' to='/info'>
            Login
          </Button>
      </Main>
      <Footer>
        <Image className='image--opacity' src={dogImg}  />
      </Footer>
		</Container>
	);
};

export default Login;
