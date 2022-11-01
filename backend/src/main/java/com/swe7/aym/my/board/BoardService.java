package com.swe7.aym.my.board;

import com.swe7.aym.my.dto.BoardDto;
import com.swe7.aym.my.dto.BoardSaveDto;
import com.swe7.aym.my.dto.BoardUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class BoardService {

    private final BoardRepository boardRepository;

    public Long save(BoardSaveDto requestDto) {
        return boardRepository.save(requestDto.toEntity()).getBoardId();
    }

    public void delete(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        boardRepository.delete(board);
    }

    public Long update(Long id, BoardUpdateDto boardUpdateDto) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        board.update(boardUpdateDto.getTitle(), boardUpdateDto.getContents());
        return id;
    }

    public BoardDto findById(Long id) {
        Board entity = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        return new BoardDto(entity);
    }

    public List<BoardDto> findAllDesc() {
        return boardRepository.findAllDesc()
                .stream()
                .map(BoardDto::new)
                .collect(Collectors.toList());
    }
}