package com.swe7.aym.user;

import com.swe7.aym.user.dto.UserSaveDto;
import org.junit.After;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.testcontainers.containers.DockerComposeContainer;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.io.File;

import static org.assertj.core.api.Assertions.assertThat;

@Testcontainers
@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserServiceTest {

    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @After
    public void cleanup(){
        userRepository.deleteAll();
    }
    static final DockerComposeContainer composeContainer;

    static
    {
        composeContainer = new DockerComposeContainer(new File("src/test/resources/docker-compose.yaml"));
        composeContainer.start();
    }

    @Test
    void save() {
        String email = "test@test.com";
        String nickname = "testNick";
        String phone_number = "010-1111-1111";
        int gender = 1; //1 = Male 2= Female 3 = Etc
        UserSaveDto testDto = UserSaveDto.builder()
                .email(email)
                .nickname(nickname)
                .phone_number(phone_number)
                .gender(gender)
                .build();
        Long resID = userService.save(testDto);
        User result = userRepository.findById(resID).get();
        assertThat(result.getUserId()).isEqualTo(resID);
        assertThat(result.getEmail()).isEqualTo(email);
        assertThat(result.getNickname()).isEqualTo(nickname);
        assertThat(result.getPhone_number()).isEqualTo(phone_number);
        assertThat(result.getGender()).isEqualTo(gender);
    }

    @Test
    void update() {
    }

    @Test
    void findById() {
    }

    @Test
    void getAvgStar() {
    }
}