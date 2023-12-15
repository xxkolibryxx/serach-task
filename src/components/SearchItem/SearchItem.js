import React from 'react';
import classes from './style.module.css';
import SearchIcon from '../../assets/icons/search-icon.svg';
import ShopIcon from '../../assets/icons/shop-icon.svg';
import { SEARCH_ITEM_TYPES } from '../../constants/constants';

const SearchItem = ({ item, type = '' }) => {
	if (type === SEARCH_ITEM_TYPES.suggestedSearches) {
		return (
			<div className={classes.searchItem}>
				<img src={SearchIcon} alt={`${item}-search`} />
				<p>{item}</p>
			</div>
		);
	}
	if (type === SEARCH_ITEM_TYPES.categories) {
		const { name, subcategory, company } = item;
		return (
			<div className={classes.searchItem}>
				<img src={ShopIcon} alt={`${item}-search`} />
				{company ? (
					<div>
						<p>
							<b>{company && company.name}</b>
						</p>
						<p>{name}</p>
					</div>
				) : (
					<div>
						<p>
							<b>{name}</b>
						</p>
						<p>{subcategory && subcategory.name}</p>
					</div>
				)}
			</div>
		);
	}
	if (
		type === SEARCH_ITEM_TYPES.companies ||
		type === SEARCH_ITEM_TYPES.manufacturers
	) {
		const { name, logo } = item;
		return (
			<div className={classes.searchItemCompany}>
				<div className={classes.searchItemCompanyImage}>
					<img src={logo} alt={`${item}-search`} />
				</div>
				<div>
					<p>
						<b>{name}</b>
					</p>
				</div>
			</div>
		);
	}
	if (
		type === SEARCH_ITEM_TYPES.services ||
		type === SEARCH_ITEM_TYPES.products
	) {
		const { name, price, company, images } = item;
		const image = images.length > 0 ? images[0] : ShopIcon;
		console.log(item);
		return (
			<div className={classes.searchItem}>
				<div className={classes.searchItemProductImage}>
					<img src={image} alt={`${item}-search`} />
				</div>
				<div>
					<p>
						<b>
							{company && company.name} | {name}
						</b>
					</p>
					<p>{price}</p>
				</div>
			</div>
		);
	}
};

export default SearchItem;
