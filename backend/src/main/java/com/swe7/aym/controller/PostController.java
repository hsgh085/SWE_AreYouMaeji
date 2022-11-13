package com.swe7.aym.controller;

import com.swe7.aym.post.PostService;
import com.swe7.aym.post.dto.PostDto;
import com.swe7.aym.post.dto.PostEndDto;
import com.swe7.aym.post.dto.PostSaveDto;
import com.swe7.aym.post.dto.PostUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostController {
    //todo
    private final PostService postService;

    @PostMapping("/api/posts")
    public Long save(@RequestBody PostSaveDto requestDto) {
        return postService.save(requestDto);
    }

    @PutMapping("/api/posts/done/{id}")
    public Long updateEnd(@PathVariable Long id, @RequestBody PostEndDto postEndDto) {
        return postService.updateEnd(id, postEndDto);
    }

    @PutMapping("/api/posts/ongoing/{id}/{state}")
    public Long updateState(@PathVariable Long id, @PathVariable int state) {
        return postService.updateState(id, state);
    }
}
