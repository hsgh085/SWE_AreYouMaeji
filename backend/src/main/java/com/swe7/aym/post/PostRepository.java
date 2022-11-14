package com.swe7.aym.post;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByState(int target_state);

    List<Post> findByStateOrderByCreateTime(int state);

    List<Post> findByContentsContaining(String target_keyword);

    List<Post> findByClient(Long id);

    List<Post> findByCategory1OrCategory2(String category1, String category2);






}
