package com.swe7.aym.my.board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Query("SELECT p FROM Board p ORDER BY p.boardId DESC")
    List<Board> findAllDesc();

}
