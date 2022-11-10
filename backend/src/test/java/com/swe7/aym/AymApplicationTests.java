package com.swe7.aym;

import com.swe7.aym.post.Post;
import com.swe7.aym.post.PostRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AymApplicationTests {

    @Autowired
    PostRepository postRepository;

    @After
    public void cleanup(){
        postRepository.deleteAll();
    }

    @Test
    public void loadTest() {
        String title = "Title";
        String content = "Contest";

        postRepository.save(Post.builder()
                        .title(title)
                        .contents(content)
                        .build());

        List<Post> postList = postRepository.findAll();

        Post post = postList.get(0);
        assertThat(post.getTitle()).isEqualTo(title);
        assertThat(post.getContents()).isEqualTo(content);
    }
}
