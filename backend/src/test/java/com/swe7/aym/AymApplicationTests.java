package com.swe7.aym;

import com.swe7.aym.my.board.Board;
import com.swe7.aym.my.board.BoardRepository;
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
    BoardRepository boardRepository;

    @After
    public void cleanup(){
        boardRepository.deleteAll();
    }

    @Test
    public void loadTest() {
        String title = "Title";
        String content = "Contest";

        boardRepository.save(Board.builder()
                        .title(title)
                        .contents(content)
                        .build());

        List<Board> boardList = boardRepository.findAll();

        Board board = boardList.get(0);
        assertThat(board.getTitle()).isEqualTo(title);
        assertThat(board.getContents()).isEqualTo(content);
    }
}
