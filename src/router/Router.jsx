import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Info } from '../pages/index';

const Router = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Register />} />
			<Route path='info' element={<Info />} />
		</Routes>
	);
};

export default Router;