package com.me.todoapp.repository;

import com.me.todoapp.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note,Integer> {
List<Note> findNotesByHeaderContaining(String substring);


}
