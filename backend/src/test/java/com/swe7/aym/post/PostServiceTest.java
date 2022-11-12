package com.swe7.aym.post;

import com.swe7.aym.post.dto.PostSaveDto;
import org.junit.After;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PostServiceTest {

    @Autowired
    PostRepository postRepository;

    @After
    public void tearDown() throws Exception {
        postRepository.deleteAll();
    }

    @Test
    void save() {
        String title;
        String contents;
        PostSaveDto postSaveDto = PostSaveDto.builder()
                .build();
        postRepository.save(postSaveDto.toEntity()).getPostId();
    }

    @Test
    void delete() {
    }

    @Test
    void update() {
    }

    @Test
    void findById() {
    }

    @Test
    void findAllDesc() {
    }
}