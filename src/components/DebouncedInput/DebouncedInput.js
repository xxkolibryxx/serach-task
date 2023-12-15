import classes from './style.module.css';
import SearchIcon from '../../assets/icons/search-icon.svg';
import CancleIcon from '../../assets/icons/cancle-icon.svg';
import { useDebouncedInput } from './useDebouncedInput';

const DebouncedInput = () => {
	const { value, handleInputChange, clearInputValue } = useDebouncedInput();
	return (
		<div className={classes.input_group}>
			<img src={SearchIcon} alt='search-icon' />
			<input
				type='text'
				value={value}
				onChange={handleInputChange}
				placeholder='Type here...'
				className={classes.input}
			/>
			{value && (
				<div onClick={clearInputValue}>
					<img src={CancleIcon} className='touchable-icon' alt='cancle-icon' />
				</div>
			)}
		</div>
	);
};

export default DebouncedInput;
