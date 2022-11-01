package com.swe7.aym.my.dto;

import com.swe7.aym.my.board.Board;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardSaveDto {
    private String title;
    private String contents;

    @Builder
    public BoardSaveDto(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }

    public Board toEntity(){
        return Board.builder()
                .title(title)
                .contents(contents)
                .build();
    }

}
