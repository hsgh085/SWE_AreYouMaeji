package com.swe7.aym.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select sum(p.helper_star)from Post p where p.helper.userId = ?1")
    float getSumHelperStar(Long id);

    @Query("select sum(p.client_star) from Post p where p.client.userId = ?1")
    float getSumClientStar(Long id);

    @Query("select count(p) from Post p where p.client.userId = ?1 or p.helper.userId = ?1")
    int getCntStar(Long id);

    User findByEmail(String email);
}
