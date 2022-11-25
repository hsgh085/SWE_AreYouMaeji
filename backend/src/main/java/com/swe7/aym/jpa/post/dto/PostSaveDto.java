package com.swe7.aym.jpa.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostSaveDto {
    private String client_email;

    private String product;
    private String contents;
    private String category;
    private int fee;
    private int cost;

    @Builder
    public PostSaveDto(String client, String product, String contents,
                       String category, int fee, int cost) {
        this.client_email = client;
        this.product = product;
        this.contents = contents;
        this.category = category;
        this.fee = fee;
        this.cost = cost;
    }
}
