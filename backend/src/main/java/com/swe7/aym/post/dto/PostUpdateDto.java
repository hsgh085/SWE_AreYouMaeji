package com.swe7.aym.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostUpdateDto {
    //todo
    private String contents;
    private int fee;

    @Builder
    public PostUpdateDto(String contents, int fee) {
        this.contents = contents;
        this.fee = fee;
    }
}
