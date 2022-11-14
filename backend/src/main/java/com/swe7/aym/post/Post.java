package com.swe7.aym.post;

import com.swe7.aym.category.Category;
import com.swe7.aym.user.User;
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
    private User client;

    @ManyToOne
    @JoinColumn(name = "helper_id")
    private User helper;

    @Column(length = 4000)
    private String contents;

    @ManyToOne
    @JoinColumn(name = "category1")
    private Category category1;

    @ManyToOne
    @JoinColumn(name = "category2")
    private Category category2;

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
    public Post(User client, User helper, String contents,
                Category category1, Category category2, int client_star, int helper_star,
                int fee, int cost, String createTime, int state
                ) {
        this.client = client;
        this.helper = helper;
        this.contents = contents;
        this.category1 = category1;
        this.category2 = category2;
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
