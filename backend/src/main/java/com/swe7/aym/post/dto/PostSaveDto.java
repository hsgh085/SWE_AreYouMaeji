package com.swe7.aym.post.dto;

import com.swe7.aym.post.Post;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostSaveDto {
    //todo
    private String title;
    private String contents;

    @Builder
    public PostSaveDto(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }

    public Post toEntity(){
        return Post.builder()
                .title(title)
                .contents(contents)
                .build();
    }

}
