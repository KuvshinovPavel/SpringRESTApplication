package com.me.todoapp.model;

import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "notes")
@Proxy(lazy = false)
public class Note {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="notes_id_seq")
    @SequenceGenerator(name="judgements_id_seq", sequenceName="notes_id_seq", allocationSize=1)

    private Integer noteId;


    private LocalDate date;

    private String header;

    private String text;

    public int getNoteId() {
        return noteId;
    }

    public Note() {

    }


    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Note note = (Note) o;
        return noteId == note.noteId && date.equals(note.date) && header.equals(note.header) && text.equals(note.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(noteId, date, header, text);
    }

}
