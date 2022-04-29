import React from 'react';
import {format} from 'date-fns';
import { ru } from 'date-fns/locale'


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time:   format(new Date(), "dd MMM yyyy HH : mm", {locale: ru}),
		};
	}
	
	

	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick() {
		this.setState({
			time: format(new Date(), "dd MMM yyyy  HH : mm", {locale: ru}),
		});
	}

	render() {
		return <>{this.state.time}</>;
	}
}

export default Clock;
