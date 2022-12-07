package com.swe7.aym.redis.token;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, String> {
    public Optional<Token> findTokenByEmail(String email);
}
