package com.me.todoapp.controller;

import com.me.todoapp.model.Note;
import com.me.todoapp.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/note")
public class NoteController {

    private final NoteService noteService;



    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    @CrossOrigin
    public List<Note> getNotes() {
        return noteService.getNotes();
    }

    @GetMapping("/{substring}")
    @CrossOrigin
    public List<Note> showNote(@PathVariable("substring") String substring){



        return noteService.showNoteBySubstring(substring);
    }

    @PostMapping
    @CrossOrigin
    public Note saveNote(@RequestBody Note note) {
        return noteService.saveNote(note);
    }

    @DeleteMapping("/{noteId}")
    @CrossOrigin
    public void deleteNote(@PathVariable("noteId") Integer noteId){
        noteService.deleteNote(noteId);
    }

    @PutMapping("/{noteId}")
    @CrossOrigin
    public Note updateNote(@PathVariable("noteId") Integer noteId,@RequestBody Note note) {
        return noteService.updateNote(noteId,note);
    }



}
