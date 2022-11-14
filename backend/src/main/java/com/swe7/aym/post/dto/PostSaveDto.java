package com.swe7.aym.post.dto;

import com.swe7.aym.category.Category;
import com.swe7.aym.post.Post;

import com.swe7.aym.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class PostSaveDto {
    private User client;
    private User helper;
    private String contents;
    private Category category1;
    private Category category2;
    private int fee;
    private int cost;
    private String create_time;

    @Builder
    public PostSaveDto(User client, User helper, String contents,
                       Category category1, Category category2,
                       int fee, int cost, String create_time) {
        this.client = client;
        this.helper = helper;
        this.contents = contents;
        this.category1 = category1;
        this.category2 = category2;
        this.fee = fee;
        this.cost = cost;
        this.create_time = LocalDateTime.now().toString();
    }

    public Post toEntity(){
        return Post.builder()
                .client(client)
                .helper(helper)
                .contents(contents)
                .category1(category1)
                .category2(category2)
                .fee(fee)
                .cost(cost)
                .createTime(create_time)
                .build();
    }

}
