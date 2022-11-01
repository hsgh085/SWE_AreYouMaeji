package com.swe7.aym.my.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardUpdateDto {
    private String title;
    private String contents;

    @Builder
    public BoardUpdateDto(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }
}
