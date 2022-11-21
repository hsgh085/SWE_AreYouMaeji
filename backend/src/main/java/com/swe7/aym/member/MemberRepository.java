package com.swe7.aym.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    @Query("select sum(p.helper_star)from Post p where p.helper.email = ?1")
    float getSumHelperStar(String email);

    @Query("select sum(p.client_star) from Post p where p.client.email = ?1")
    float getSumClientStar(String email);

    @Query("select count(p) from Post p where p.client.member_id = ?1 or p.helper.email = ?1")
    int getCntStar(String email);

    Optional<Member> findByEmail(String email);

    Boolean existsByEmail(String email);
}
