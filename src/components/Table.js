import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentWillReceiveProps() {
		console.log(this.sortBy);
	}

    // complete the comparators
	compareByAge(a, b) {
		
	}

	compareByName(a, b) {
		
	}

	compareByPoints(a, b) {
		
	}

	compareByRank(a, b) {
		
	}

	render() {
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{this.state.users.map((data , i)=>{
						return (
							<tr key={i}>
								<td>{data.age}</td>
								<td>{data.name}</td>
								<td>{data.points}</td>
								<td>{data.rank}</td>
							</tr>
						);
					}) }
				</tbody>
			</table>
		</div>)
	}
}
