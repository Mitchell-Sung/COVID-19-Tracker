import React, { Fragment } from 'react';

import CountUp from 'react-countup';
import cn from 'classnames';

// FOR UI DESIGN
import styles from './Cards.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// MAIN COMPONENT
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed && !recovered && !deaths && !lastUpdate) {
		return 'Loading...';
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				{/*  */}
				<Grid
					item
					componnt={Card}
					xs={12}
					md={3}
					className={cn(styles.card, styles.infected)}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Infected
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				{/*  */}
				<Grid
					item
					componnt={Card}
					xs={12}
					md={3}
					className={cn(styles.card, styles.recovered)}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Recovered
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of recoveries cases from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				{/*  */}
				<Grid
					item
					componnt={Card}
					xs={12}
					md={3}
					className={cn(styles.card, styles.deaths)}
				>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Deaths
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={deaths.value}
								duration={2.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of deaths caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
