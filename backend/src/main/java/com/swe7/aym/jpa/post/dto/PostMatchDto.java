package com.swe7.aym.jpa.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostMatchDto {
    private String helper_email;

    @Builder
    public PostMatchDto(String helper_email) {
        this.helper_email = helper_email;
    }
}
