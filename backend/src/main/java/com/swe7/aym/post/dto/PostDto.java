package com.swe7.aym.post.dto;

import com.swe7.aym.category.Category;
import com.swe7.aym.post.Post;
import com.swe7.aym.user.User;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
public class PostDto {

    private Long postId;
    private User client;
    private User helper;
    private String contents;
    private Category category1;
    private Category category2;
    private int client_star;
    private int helper_star;
    private int fee;
    private int cost;
    private String create_time;
    private int state;

    public PostDto(Post post) {
        this.client = post.getClient();
        this.helper = post.getHelper();
        this.contents = post.getContents();
        this.category1 = post.getCategory1();
        this.category2 = post.getCategory2();
        this.client_star = post.getClient_star();
        this.helper_star = post.getHelper_star();
        this.fee = post.getFee();
        this.cost = post.getCost();
        this.create_time = post.getCreate_time();
        this.state = post.getState();
    }

}
