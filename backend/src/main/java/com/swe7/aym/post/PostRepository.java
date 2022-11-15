package com.swe7.aym.post;

import com.swe7.aym.category.Category;
import com.swe7.aym.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByState(int target_state);

    List<Post> findByStateOrderByCreateTime(int state);

    List<Post> findByContentsContaining(String target_keyword);

    List<Post> findByClient(Optional<User> user);

    List<Post> findByCategory1OrCategory2(Category category1, Category category2);






}
