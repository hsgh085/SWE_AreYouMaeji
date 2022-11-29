package com.swe7.aym.jpa.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostEndDto {
    private int star;

    @Builder
    public PostEndDto(int star) {
        this.star = star;
    }
}
