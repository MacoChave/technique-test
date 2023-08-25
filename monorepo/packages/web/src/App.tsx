import './App.css';
import { Country } from './pages/Country';
import { Department } from './pages/Department';
import { Person } from './pages/Person';

function App() {
	return (
		<div className='main'>
			<Country />
			<Department />
			<Person />
		</div>
	);
}

export default App;
