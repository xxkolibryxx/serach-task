import './App.css';
import DebouncedInput from './components/DebouncedInput/DebouncedInput';
import { GlobalProvider } from './providers/Global';
import { SearchResult } from './components/SerachResult/SearchResult';

function App() {
	return (
		<GlobalProvider>
			<div className='container'>
				<DebouncedInput />
				<SearchResult />
			</div>
		</GlobalProvider>
	);
}

export default App;
