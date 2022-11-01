package com.swe7.aym.my.dto;

import com.swe7.aym.my.board.Board;
import lombok.Getter;

@Getter
public class BoardDto {

    private Long boardId;
    private String title;
    private String contents;

    public BoardDto(Board board) {
        this.boardId = board.getBoardId();
        this.title = board.getTitle();
        this.contents = board.getContents();
    }

}
