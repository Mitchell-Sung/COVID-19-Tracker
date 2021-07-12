import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const apiFetchData = async (country) => {
	let changeableUrl = url;

	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);
		const modifiedData = { confirmed, recovered, deaths, lastUpdate };
		return modifiedData;
	} catch (error) {
		console.error(error);
	}
};

export default apiFetchData;
