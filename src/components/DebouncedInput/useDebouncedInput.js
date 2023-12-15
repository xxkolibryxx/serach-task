import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../providers/Global';

export const useDebouncedInput = () => {
	const [value, setValue] = useState('');
	const { setSearchData, setLoading } = useContext(GlobalContext);

	const fetchData = async (searchWord) => {
		setLoading(true);
		try {
			const response = await fetch(
				`${process.env.REACT_APP_SERVER_BASE_URL}?word=${searchWord}`
			);
			return response.json();
		} catch (e) {
			console.log(e.message);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		const timer = setTimeout(async () => {
			if (value !== '') {
				const result = await fetchData(value);
				setSearchData(result);
			}
			if (value === '') {
				setSearchData({});
			}
		}, 500);

		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const handleInputChange = (event) => {
		setValue(event.target.value);
	};

	const clearInputValue = () => {
		setValue('');
		setSearchData({});
	};
	return {
		value,
		handleInputChange,
		clearInputValue,
	};
};
