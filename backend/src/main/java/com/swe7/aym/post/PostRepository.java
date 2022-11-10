package com.swe7.aym.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    //todo

    @Query("SELECT p FROM post p ORDER BY p.boardId DESC")
    List<Post> findAllDesc();

}
