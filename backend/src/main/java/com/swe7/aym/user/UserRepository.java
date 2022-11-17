package com.swe7.aym.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select sum(p.helper_star)from Post p where p.helper.email = ?1")
    float getSumHelperStar(String email);

    @Query("select sum(p.client_star) from Post p where p.client.email = ?1")
    float getSumClientStar(String email);

    @Query("select count(p) from Post p where p.client.userId = ?1 or p.helper.email = ?1")
    int getCntStar(String email);

    Optional<User> findByEmail(String email);

    Boolean findByEmailExists(String email);
}
