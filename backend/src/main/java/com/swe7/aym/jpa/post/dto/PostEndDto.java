package com.swe7.aym.jpa.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostEndDto {
    private int client_star;
    private int helper_star;
    private int state;

    @Builder
    public PostEndDto(int client_star, int helper_star, int state) {
        this.client_star = client_star;
        this.helper_star = helper_star;
        this.state = state;
    }
}
