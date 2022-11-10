package com.swe7.aym.post.dto;

import com.swe7.aym.post.Post;
import lombok.Getter;

@Getter
public class PostDto {
    //todo

    private Long postId;
    private String title;
    private String contents;

    public PostDto(Post post) {
        this.postId = post.getPostId();
        this.title = post.getTitle();
        this.contents = post.getContents();
    }

}
