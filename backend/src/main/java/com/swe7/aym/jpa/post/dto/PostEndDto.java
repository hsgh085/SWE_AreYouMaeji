package com.swe7.aym.jpa.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostEndDto {
    private String star;

    @Builder
    public PostEndDto(String star) {
        this.star = star;
    }
}
