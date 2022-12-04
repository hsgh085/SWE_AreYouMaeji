package com.swe7.aym.jpa.post;

import com.swe7.aym.jpa.category.Category;
import com.swe7.aym.jpa.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class Post implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @NotNull
    private Member client;

    @ManyToOne
    @JoinColumn(name = "helper_id")
    private Member helper;

    @Column(length = 200)
    @NotNull
    private String product;
    @Column(length = 200)
    @NotNull
    private String destination;

    @Column(length = 4000)
    @NotNull
    private String contents;

    @ManyToOne
    @JoinColumn(name = "category")
    @NotNull
    private Category category;

    @ColumnDefault("0")
    private int client_star;
    @ColumnDefault("0")
    private int helper_star;
    private int fee;
    private int cost;
    @NotNull
    private String createTime;
    @ColumnDefault("0")
    private int state;

    @Builder
    public Post(Member client, Member helper, String product, String destination, String contents,
                Category category, int client_star, int helper_star,
                int fee, int cost, String createTime, int state
                ) {
        this.client = client;
        this.helper = helper;
        this.product = product;
        this.destination = destination;
        this.contents = contents;
        this.category = category;
        this.client_star = client_star;
        this.helper_star = helper_star;
        this.fee = fee;
        this.cost = cost;
        this.createTime = createTime;
        this.state = state;
    }

    public void updateEnd(int client_star, int helper_star, int state) {
        this.client_star = client_star;
        this.helper_star = helper_star;
        this.state = state;
    }

    public void updateHelper(Member helper) {
        this.helper = helper;
        this.state = 1;
    }
}
