package com.swe7.aym.user;

import com.swe7.aym.user.dto.UserSaveDto;
import com.swe7.aym.user.dto.UserUpdateDto;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.testcontainers.containers.DockerComposeContainer;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.io.File;
import java.util.Optional;

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

    static final DockerComposeContainer composeContainer;

    static
    {
        composeContainer = new DockerComposeContainer(new File("src/test/resources/docker-compose.yaml"));
        composeContainer.start();
    }
    @AfterEach
    public void cleanup(){
        userRepository.deleteAll();
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
        String email = "test@test.com";
        String nickname = "testNick";
        String phone_number = "010-1111-1111";
        int gender = 1; //1 = Male 2= Female 3 = Etc

        String new_nickname = "test1Nick";
        String new_phone_number = "010-1111-1112";

        UserSaveDto testDto = UserSaveDto.builder()
                .email(email)
                .nickname(nickname)
                .phone_number(phone_number)
                .gender(gender)
                .build();

        UserUpdateDto testDto1 = UserUpdateDto.builder()
                .nickname(new_nickname)
                .phone_number(new_phone_number)
                .build();

        Long resID = userService.save(testDto);
        resID = userService.update(resID, testDto1);
        User result = userRepository.findById(resID).get();

        assertThat(result.getNickname()).isEqualTo(new_nickname);
        assertThat(result.getPhone_number()).isEqualTo(new_phone_number);
    }

    @Test
    void findById() {
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
        Optional<User> result = userRepository.findById(resID);

        assertThat(result).isNotEmpty();
        if (result.isPresent()){

            assertThat(result.get().getUserId()).isEqualTo(resID);
            assertThat(result.get().getEmail()).isEqualTo(email);
            assertThat(result.get().getNickname()).isEqualTo(nickname);
            assertThat(result.get().getPhone_number()).isEqualTo(phone_number);
            assertThat(result.get().getGender()).isEqualTo(gender);

        }
    }

    @Test
    void getAvgStar() {
    }
}