package com.me.todoapp.service;

import com.me.todoapp.model.Note;
import com.me.todoapp.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }


    public List<Note> getNotes() {
    return noteRepository.findAll();
    }

    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }
    public void deleteNote(Integer noteId) {
        noteRepository.deleteById(noteId);
    }


    public List<Note> showNoteBySubstring(String substring) {
        return noteRepository.findNotesByHeaderContaining(substring);
    }

    public Note updateNote(Integer noteId,Note note) {
        note.setNoteId(noteId);
        return noteRepository.save(note);
    }
}
