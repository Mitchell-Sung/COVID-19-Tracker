import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import apiFetchData from './api/apiFetchData';
import styles from './App.module.css';

const App = () => {
	const [data, setData] = useState({});
	const [country, setCountry] = useState('');

	// FETCH DATA FROM API.FETCHDATA
	const fetchedData = async () => {
		try {
			const data = await apiFetchData();
			setData(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchedData();
	}, []);

	const handleCountryChange = async (country) => {
		const fetchedData = await apiFetchData(country);
		setData(fetchedData);
		setCountry(country);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>COVID-19</div>
			<Cards data={data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart data={data} country={country} />
		</div>
	);
};

export default App;
