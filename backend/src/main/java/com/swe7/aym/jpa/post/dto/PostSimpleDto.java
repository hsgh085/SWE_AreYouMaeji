package com.swe7.aym.jpa.post.dto;

import com.swe7.aym.jpa.post.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostSimpleDto {
    private Long postId;
    private String product;
    private String destination;
    private int fee;
    private int cost;

    public PostSimpleDto(Post post) {
        this.postId =post.getPostId();
        this.product = post.getProduct();
        this.destination = post.getDestination();
        this.fee = post.getFee();
        this.cost = post.getCost();
    }
}
