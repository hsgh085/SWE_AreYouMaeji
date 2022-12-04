package com.swe7.aym.jpa.post;

import com.swe7.aym.jpa.category.Category;
import com.swe7.aym.jpa.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByState(int target_state);

    List<Post> findByStateOrderByCreateTime(int state);

    List<Post> findByContentsContaining(String target_keyword);

    List<Post> findByClientAndState(Member member, int state);

    List<Post> findByCategory(Category category);


}
