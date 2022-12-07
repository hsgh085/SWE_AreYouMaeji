package com.swe7.aym.jpa.post.dto;

import com.swe7.aym.jpa.post.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostStateDto {
    private int state;
    public PostStateDto(Post post) {
        this.state = post.getState();
    }

}
