package com.swe7.aym.my.board;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class Board implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(length = 100)
    private String title;

    @Column(length = 4000)
    private String contents;

    @Builder
    public Board(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }

    public void update(String title, String content) {
        this.title = title;
        this.contents = content;
    }

}
