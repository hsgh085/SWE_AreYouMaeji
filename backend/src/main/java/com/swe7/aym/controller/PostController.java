package com.swe7.aym.controller;

import com.swe7.aym.post.PostService;
import com.swe7.aym.post.dto.PostDto;
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

    @DeleteMapping("/api/posts/{id}")
    public Long delete(@PathVariable Long id) {
        postService.delete(id);
        return id;
    }

    @PutMapping("/api/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostUpdateDto requestDto) {
        return postService.update(id, requestDto);
    }

    @GetMapping("/api/posts/{id}")
    public PostDto findById(@PathVariable Long id) {
        return postService.findById(id);
    }

    @GetMapping("/api/posts/list")
    public List<PostDto> findAllDesc() {
        return postService.findAllDesc();
    }
}
