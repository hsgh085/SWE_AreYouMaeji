package com.swe7.aym.my;

import com.swe7.aym.my.board.BoardService;
import com.swe7.aym.my.dto.BoardDto;
import com.swe7.aym.my.dto.BoardSaveDto;
import com.swe7.aym.my.dto.BoardUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ApiController {

    private final BoardService boardService;

    @PostMapping("/api/posts")
    public Long save(@RequestBody BoardSaveDto requestDto) {
        return boardService.save(requestDto);
    }

    @DeleteMapping("/api/posts/{id}")
    public Long delete(@PathVariable Long id) {
        boardService.delete(id);
        return id;
    }

    @PutMapping("/api/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody BoardUpdateDto requestDto) {
        return boardService.update(id, requestDto);
    }

    @GetMapping("/api/posts/{id}")
    public BoardDto findById(@PathVariable Long id) {
        return boardService.findById(id);
    }

    @GetMapping("/api/posts/list")
    public List<BoardDto> findAllDesc() {
        return boardService.findAllDesc();
    }
}
