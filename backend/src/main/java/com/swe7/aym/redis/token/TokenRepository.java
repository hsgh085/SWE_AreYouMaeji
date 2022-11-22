package com.swe7.aym.redis.token;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, String> {
    public Boolean existsByEmail(String email);
}
