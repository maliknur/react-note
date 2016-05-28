import mongoose from 'mongoose';
import '../models/Note';

const Note = mongoose.model('Note');

// establish mongodb connection
export function setupConnection() {
	mongoose.connect('mongodb://localhost/notes');
}

// get all notes from mondodb
export function listNotes() {
	return Note.find();
}

// create new note
export function createNote(data) {
	const note = new Note({
		title: data.title,
		text: data.text,
		color: data.color,
		createdAt: new Date()
	});

	return note.save();
}

// delete a note
export function deleteNote(id) {
	return Note.findById(id).remove();
}

