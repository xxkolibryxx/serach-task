import React, { useContext } from 'react';
import { GlobalContext } from '../../providers/Global';
import classes from './style.module.css';
import SearchItem from '../SearchItem/SearchItem';
import { SEARCH_ITEM_TYPES } from '../../constants/constants';
export const SearchResult = () => {
	const { searchData, loading } = useContext(GlobalContext);
	const {
		suggestedSearches,
		categories,
		companies,
		manufacturers,
		services,
		products,
	} = searchData;
	if (loading) return 'Searching.....';
	if (Object.keys(searchData).length > 0)
		return (
			<div className={classes.searchResultBox}>
				{suggestedSearches && suggestedSearches.length > 0 && (
					<div className={classes.searchResultBoxItem}>
						<p className={classes.searchResultBoxTitle}>
							<b>Suggested searches</b>
						</p>
						{suggestedSearches.map((item, index) => (
							<SearchItem
								key={index}
								item={item}
								type={SEARCH_ITEM_TYPES.suggestedSearches}
							/>
						))}
					</div>
				)}
				{categories && categories.length > 0 && (
					<div className={classes.searchResultBoxItem}>
						<p className={classes.searchResultBoxTitle}>
							<b>Categories</b>
						</p>
						{categories.map((item, index) => (
							<SearchItem
								key={index}
								item={item}
								type={SEARCH_ITEM_TYPES.categories}
							/>
						))}
					</div>
				)}
				{companies && companies.length > 0 && (
					<div className={classes.searchResultBoxItem}>
						<p className={classes.searchResultBoxTitle}>
							<b>Companies</b>
						</p>
						{companies.map((item, index) => (
							<SearchItem
								key={index}
								item={item}
								type={SEARCH_ITEM_TYPES.companies}
							/>
						))}
					</div>
				)}
				{manufacturers && manufacturers.length > 0 && (
					<div className={classes.searchResultBoxItem}>
						<p className={classes.searchResultBoxTitle}>
							<b>Manufacturers</b>
						</p>
						{manufacturers.map((item, index) => (
							<SearchItem
								key={index}
								item={item}
								type={SEARCH_ITEM_TYPES.manufacturers}
							/>
						))}
					</div>
				)}
				{services && services.length > 0 && (
					<div className={classes.searchResultBoxItem}>
						<p className={classes.searchResultBoxTitle}>
							<b>Services</b>
						</p>
						{services.map((item, index) => (
							<SearchItem
								key={index}
								item={item}
								type={SEARCH_ITEM_TYPES.services}
							/>
						))}
					</div>
				)}
				{products && products.length > 0 && (
					<div className={classes.searchResultBoxItem}>
						<p className={classes.searchResultBoxTitle}>
							<b>Products</b>
						</p>
						{products.map((item, index) => (
							<SearchItem
								key={index}
								item={item}
								type={SEARCH_ITEM_TYPES.products}
							/>
						))}
					</div>
				)}
			</div>
		);
};
