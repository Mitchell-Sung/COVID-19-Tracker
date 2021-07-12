import React, { Fragment, useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import apiFetchData from './api/apiFetchData';

import styles from './App.module.css';

const App = () => {
	const [data, setData] = useState({});

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

	return (
		<div className={styles.container}>
			<Cards data={data} />
			<CountryPicker />
			<Chart />
		</div>
	);
};

export default App;
