package com.swe7.aym.post;

import com.swe7.aym.category.Category;
import com.swe7.aym.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByState(int target_state);

    List<Post> findByStateOrderByCreateTime(int state);

    List<Post> findByContentsContaining(String target_keyword);

    List<Post> findByClient(Member member);

    List<Post> findByCategory1OrCategory2(Category category1, Category category2);


}
