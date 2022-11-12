package com.swe7.aym.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

//    @Query("select sum(p.client_star) + sum(p.helper_star) " +
//            "from Post p where p.client_id = id or p.helper_id = id")
//    float getSumStar(Long id);
//
//    @Query("select count(p) from Post p where p.client_id = id or p.helper_id = id")
//    int getCntStar(Long id);
}
