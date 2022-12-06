package com.swe7.aym.jpa.post.dto;

import com.swe7.aym.jpa.post.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostResponseDto {

    private Long postId;
    private String client_phone;
    private String client_nick;
    private String helper_phone;
    private String helper_nick;
    private String contents;
    private String destination;
    private String category;
    private int fee;
    private int cost;
    private String product;

    private int state;

    public PostResponseDto(Post post) {
        this.postId = post.getPostId();
        this.client_phone = post.getClient().getPhone_number();
        this.client_nick = post.getClient().getNickname();
        this.helper_phone = post.getHelper().getPhone_number();
        this.helper_nick = post.getHelper().getNickname();
        this.contents = post.getContents();
        this.destination = post.getDestination();
        this.category = post.getCategory().getContext();
        this.fee = post.getFee();
        this.cost = post.getCost();
        this.product = post.getProduct();
        this.state = post.getState();
    }

}
