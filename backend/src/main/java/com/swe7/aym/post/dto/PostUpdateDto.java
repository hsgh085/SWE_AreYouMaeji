package com.swe7.aym.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostUpdateDto {
    //todo
    private String title;
    private String contents;

    @Builder
    public PostUpdateDto(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }
}
