//package com.swe7.aym.user;
//
//import com.swe7.aym.category.Category;
//import com.swe7.aym.category.CategoryRepository;
//import com.swe7.aym.post.PostRepository;
//import com.swe7.aym.post.PostService;
//import com.swe7.aym.post.dto.PostSaveDto;
//import com.swe7.aym.user.dto.UserSaveDto;
//import com.swe7.aym.user.dto.UserUpdateDto;
//import org.junit.Before;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.testcontainers.containers.DockerComposeContainer;
//import org.testcontainers.junit.jupiter.Testcontainers;
//
//import java.io.File;
//import java.util.Optional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@Testcontainers
//@ActiveProfiles("test")
//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class UserServiceTest {
//
//    @Autowired
//    UserService userService;
//    @Autowired
//    UserRepository userRepository;
//    @Autowired
//    PostService postService;
//    @Autowired
//    CategoryRepository categoryRepository;
//
//    UserSaveDto testDto;
//    String email = "test@test.com";
//    String nickname = "testNick";
//    String phone_number = "010-1111-1111";
//    int gender = 1; //1 = Male 2= Female 3 = Etc
//
//    static final DockerComposeContainer composeContainer;
//
//    static
//    {
//        composeContainer = new DockerComposeContainer(new File("src/test/resources/docker-compose.yaml"));
//        composeContainer.start();
//    }
//
//    @BeforeEach
//    public void setUp(){
//        testDto = UserSaveDto.builder()
//                .email(email)
//                .nickname(nickname)
//                .phone_number(phone_number)
//                .gender(gender)
//                .build();
//    }
//
//    @AfterEach
//    void tearDown(){
//        userRepository.deleteAll();
//        categoryRepository.deleteAll();
//    }
//
//    @Test
//    void save() {
//
//        Long resID = userService.save(testDto);
//        User result = userRepository.findById(resID).get();
//
//        assertThat(result.getUserId()).isEqualTo(resID);
//        assertThat(result.getEmail()).isEqualTo(email);
//        assertThat(result.getNickname()).isEqualTo(nickname);
//        assertThat(result.getPhone_number()).isEqualTo(phone_number);
//        assertThat(result.getGender()).isEqualTo(gender);
//    }
//
//    @Test
//    void update() {
//        String new_nickname = "test1Nick";
//        String new_phone_number = "010-1111-1112";
//
//        UserUpdateDto testDto1 = UserUpdateDto.builder()
//                .nickname(new_nickname)
//                .phone_number(new_phone_number)
//                .build();
//
//        Long resID = userService.save(testDto);
//        resID = userService.update(resID, testDto1);
//        User result = userRepository.findById(resID).get();
//
//        assertThat(result.getNickname()).isEqualTo(new_nickname);
//        assertThat(result.getPhone_number()).isEqualTo(new_phone_number);
//    }
//
//    @Test
//    void findById() {
//
//        Long resID = userService.save(testDto);
//        Optional<User> result = userRepository.findById(resID);
//
//        assertThat(result).isNotEmpty();
//
//        if (result.isPresent()){
//            assertThat(result.get().getUserId()).isEqualTo(resID);
//        }
//    }
//
////    @Test
////    void getAvgStar() {
////        String contents = "test";
////        Category category1 = Category.builder()
////                .context("testCate1")
////                .build();
////        Category category2 = Category.builder()
////                .context("testCate2")
////                .build();
////        int fee = 1234;
////        int cost = 4567;
////
////        categoryRepository.save(category1);
////        categoryRepository.save(category2);
////        Long user1 = userService.save(testDto);
////        Long user2 = userService.save(testDto);
////
////        PostSaveDto postDto = PostSaveDto.builder()
////                .client(testDto.toEntity())
////                .helper(testDto.toEntity())
////                .contents(contents)
////                .category1(category1)
////                .category2(category2)
////                .fee(fee)
////                .cost(cost)
////                .build();
////
////        postService.save(postDto);
////    }
//
//    @Test
//    void incNoRep(){
//
//        Long resID = userService.save(testDto);
//        userService.incNoRep(resID);
//        User result = userRepository.findById(resID).get();
//        assertThat(result.getNo_report()).isEqualTo(1);
//
//        userService.incNoRep(resID);
//        userService.incNoRep(resID);
//        userService.incNoRep(resID);
//        result = userRepository.findById(resID).get();
//        assertThat(result.getNo_report()).isEqualTo(4);
//
//    }
//}