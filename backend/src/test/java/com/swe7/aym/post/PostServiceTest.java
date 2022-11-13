package com.swe7.aym.post;

import com.swe7.aym.category.Category;
import com.swe7.aym.category.CategoryRepository;
import com.swe7.aym.category.CategoryService;
import com.swe7.aym.post.dto.PostDto;
import com.swe7.aym.post.dto.PostEndDto;
import com.swe7.aym.post.dto.PostSaveDto;
import com.swe7.aym.user.User;
import com.swe7.aym.user.UserRepository;
import com.swe7.aym.user.UserService;
import com.swe7.aym.user.dto.UserSaveDto;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.testcontainers.containers.DockerComposeContainer;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.io.File;
import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@Testcontainers
@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PostServiceTest {
    @Autowired
    PostRepository postRepository;
    @Autowired
    PostService postService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CategoryRepository categoryRepository;

    PostSaveDto testDto;
    User client = User.builder()
            .email("client@test.com")
            .nickname("testClient")
            .phone_number("010-1111-1111")
            .gender(1)
            .build();
    User helper = User.builder()
            .email("helper@test.com")
            .nickname("testHelper")
            .phone_number("010-2222-2222")
            .gender(1)
            .build();
    String contents = "test";
    Category category1 = Category.builder()
            .context("testCate1")
            .build();
    Category category2 = Category.builder()
            .context("testCate2")
            .build();
    int fee = 1234;
    int cost = 4567;

    static final DockerComposeContainer composeContainer;

    static
    {
        composeContainer = new DockerComposeContainer(new File("src/test/resources/docker-compose.yaml"));
        composeContainer.start();
    }

    @BeforeEach
    public void setUp(){
        testDto = PostSaveDto.builder()
                .client(client)
                .helper(helper)
                .contents(contents)
                .category1(category1)
                .category2(category2)
                .fee(fee)
                .cost(cost)
                .build();
        categoryRepository.save(category1);
        categoryRepository.save(category2);
        userRepository.save(client);
        userRepository.save(helper);
    }

    @AfterEach
    void tearDown(){
        postRepository.deleteAll();
        userRepository.deleteAll();
        categoryRepository.deleteAll();
        composeContainer.stop();
    }

    @Test
    void save() {
        Long res = postService.save(testDto);

        Post result = postRepository.findById(res).get();

        assertThat(result.getPostId()).isEqualTo(res);
        assertThat(result.getClient().getUserId()).isEqualTo(client.getUserId());
        assertThat(result.getHelper().getUserId()).isEqualTo(helper.getUserId());
        assertThat(result.getContents()).isEqualTo(contents);
        assertThat(result.getCategory1().getContext()).isEqualTo(category1.getContext());
        assertThat(result.getCategory2().getContext()).isEqualTo(category2.getContext());
        assertThat(result.getClient_star()).isEqualTo(0);
        assertThat(result.getHelper_star()).isEqualTo(0);
        assertThat(result.getFee()).isEqualTo(fee);
        assertThat(result.getCost()).isEqualTo(cost);
        assertThat(result.getCreate_time()).isLessThan(LocalDateTime.now().toString());
        assertThat(result.getState()).isEqualTo(0);

    }

    @Test
    void updateEnd() {
        Long res = postService.save(testDto);
        int new_cStar = 10;
        int new_hStar = 8;
        int new_state = 2;

        PostEndDto postEndDto = PostEndDto.builder()
                .client_star(new_cStar)
                .helper_star(new_hStar)
                .state(new_state)
                .build();

        postService.updateEnd(res, postEndDto);
        Post resPost = postService.findById(res);
        assertThat(resPost.getClient_star()).isEqualTo(new_cStar);
        assertThat(resPost.getHelper_star()).isEqualTo(new_hStar);
        assertThat(resPost.getState()).isEqualTo(new_state);
    }

    @Test
    void updateState() {
        Long res = postService.save(testDto);
        int new_state = 3;

        postService.updateState(res, new_state);
        Post resPost = postService.findById(res);
        assertThat(resPost.getState()).isEqualTo(new_state);
    }

    @Test
    void findByState() {
    }

    @Test
    void findByRecent() {
    }

    @Test
    void findByKeyword() {
    }

    @Test
    void findByClientId() {
    }

    @Test
    void findByCategory() {
    }
}