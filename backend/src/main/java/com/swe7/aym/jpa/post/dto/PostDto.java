package com.swe7.aym.jpa.post.dto;

import com.swe7.aym.jpa.category.Category;
import com.swe7.aym.jpa.member.Member;
import com.swe7.aym.jpa.post.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostDto {

    private Long postId;
    private Member client;
    private Member helper;
    private String contents;
    private Category category;
    private int client_star;
    private int helper_star;
    private int fee;
    private int cost;
    private String create_time;
    private int state;

    public PostDto(Post post) {
        this.postId = post.getPostId();
        this.client = post.getClient();
        this.helper = post.getHelper();
        this.contents = post.getContents();
        this.category = post.getCategory();
        this.client_star = post.getClient_star();
        this.helper_star = post.getHelper_star();
        this.fee = post.getFee();
        this.cost = post.getCost();
        this.create_time = post.getCreateTime();
        this.state = post.getState();
    }

}
