import { Route, Routes } from 'react-router-dom';
import Details from '../../pages/details/Details';
import Home from '../../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/user/:id' element={<Details />} />
		</Routes>
	);
};

export default Router;
