package com.swe7.aym.redis.token;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@RedisHash(timeToLive = 21600)
public class Token{

    @Id
    Long id;
    String email;
    String accessToken;

    @Builder
    public Token(String email, String accessToken){
        this.email = email;
        this.accessToken = accessToken;
    }

}
