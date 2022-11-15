package com.swe7.aym.admin;

import com.swe7.aym.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;

    @OneToOne
    @JoinColumn(name = "userId")
    private User user;

    @Builder
    public Admin(User user) {
        this.user = user;
    }
}
