import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Posts from './Posts.jsx';
import Postform from './Postform.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			abilities: ['Access to state', 'Utilize components', 'Use FontAwesome and SASS']
		}
  }

	render() {
		return (
      <div>
        <h1>Congratulations! <FontAwesome name="star" /></h1>
        <Postform />
        <hr />
        <Posts />


        <p><em>To change the styles, go to client > dist > styles > style.sass </em></p>
      </div>
    )
	}
}
