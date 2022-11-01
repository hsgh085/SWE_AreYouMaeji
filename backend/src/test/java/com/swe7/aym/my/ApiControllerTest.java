package com.swe7.aym.my;

import com.swe7.aym.my.board.Board;
import com.swe7.aym.my.board.BoardRepository;
import com.swe7.aym.my.dto.BoardSaveDto;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private BoardRepository boardRepository;

    @After
    public void tearDown() throws Exception {
        boardRepository.deleteAll();
    }

    @Test
    public void webLoadTest() {
        String title = "Title";
        String content = "Contest";

        BoardSaveDto reqDto = BoardSaveDto.builder()
                .title(title)
                .contents(content)
                .build();

        String url = "http://localhost:" + port + "/hello/posts";

        ResponseEntity<Long> responseEntity = testRestTemplate.postForEntity(url, reqDto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Board> all = boardRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContents()).isEqualTo(content);
    }
}