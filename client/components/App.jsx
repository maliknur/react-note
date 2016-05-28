import React from 'react';

import NotesEditor from './NotesEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './App.less';

const App = React.createClass({
	handNoteAdd(data) {
		console.log(data);
	},
	render() {
		return (
				<div className="App">
					<h2 className="App__header"><strong>Reactive</strong> Notes App</h2>
					<NotesEditor onNoteAdd = {this.handNoteAdd} />
					<NotesGrid />

				</div>

			);
	}
});

export default App;