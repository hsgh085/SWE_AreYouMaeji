package com.swe7.aym.jpa.UserDetails.dto;

import com.swe7.aym.jpa.member.Member;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {
    private String email;

    public SessionUser(Member member) {
        this.email = member.getEmail();
    }
}
