import React, { useState, useEffect } from 'react';
import apiFetchDailyData from '../../api/apiFetchDailyData';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await apiFetchDailyData());
		};
		fetchAPI();
	}, []);

	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: 'Infected',
						borderColor: '#3333ff',
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: 'Deaths',
						borderColor: '#ff0000',
						backgroundColor: '#ff0000',
						fill: true,
					},
				],
			}}
		/>
	) : null;

	const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#0000ff', '#00ff00', '#ff0000'],
              data: [confirmed.value, recovered.value, deaths.value],
            }],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

	return (
		<div className={styles.container}>
			{country ? barChart : lineChart}
		</div>
	)
	
};

export default Chart;
