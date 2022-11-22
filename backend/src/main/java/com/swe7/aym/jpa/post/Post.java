package com.swe7.aym.jpa.post;

import com.swe7.aym.jpa.category.Category;
import com.swe7.aym.jpa.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
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
    private Member client;

    @ManyToOne
    @JoinColumn(name = "helper_id")
    private Member helper;

    @Column(length = 4000)
    private String contents;

    @ManyToOne
    @JoinColumn(name = "category")
    private Category category;

    @ColumnDefault("0")
    private int client_star;
    @ColumnDefault("0")
    private int helper_star;
    private int fee;
    private int cost;
    private String createTime;
    @ColumnDefault("0")
    private int state;

    @Builder
    public Post(Member client, Member helper, String contents,
                Category category, int client_star, int helper_star,
                int fee, int cost, String createTime, int state
                ) {
        this.client = client;
        this.helper = helper;
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

    public void updateState(int state) {
        this.state = state;
    }
}
