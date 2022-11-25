package com.swe7.aym.redis.token;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.io.Serializable;

@Getter
@RedisHash(value = "members", timeToLive = 21600)
public class Token implements Serializable {

    @Id
    Long id;
    @Indexed
    String email;
    String accessToken;

    @Builder
    public Token(String email, String accessToken){
        this.email = email;
        this.accessToken = accessToken;
    }

}
