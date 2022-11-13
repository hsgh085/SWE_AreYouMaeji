package com.swe7.aym.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("SELECT p from Post p order by p.postId")
    List<Post> findByState(int target_state);

    @Query("SELECT p from Post p order by p.postId")
    List<Post> findByRecent();

    @Query("SELECT p from Post p order by p.postId")
    List<Post> findByKeyword(String target_keyword);

    @Query("SELECT p from Post p order by p.postId")
    List<Post> findByClientId(Long id);

    @Query("SELECT p from Post p order by p.postId")
    List<Post> findByCategory(String category);






}
