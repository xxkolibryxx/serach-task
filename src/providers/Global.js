import { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [searchData, setSearchData] = useState({});
	const [loading, setLoading] = useState('');

	return (
		<GlobalContext.Provider
			value={{ searchData, setSearchData, loading, setLoading }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
