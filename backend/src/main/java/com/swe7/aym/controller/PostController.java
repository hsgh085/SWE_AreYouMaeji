package com.swe7.aym.controller;

import com.swe7.aym.post.PostService;
import com.swe7.aym.post.dto.PostDto;
import com.swe7.aym.post.dto.PostEndDto;
import com.swe7.aym.post.dto.PostSaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostController {
    private final PostService postService;

    @PostMapping("/api/posts")
    public Long save(@RequestBody PostSaveDto requestDto) {
        return postService.save(requestDto);
    }
    @GetMapping("/api/posts/{id}")
    public PostDto findById(@PathVariable Long id){
        return postService.findById(id);
    }
    @GetMapping("/api/posts")
    public List<PostDto> findByRecent(){
        return postService.findByRecent();
    }
    @GetMapping("/api/posts/search/state/{state}")
    public List<PostDto> findByState(@PathVariable int state){
        return postService.findByState(state);
    }
    @GetMapping("/api/posts/search/word/{keyword}")
    public List<PostDto> findByKeyword(@PathVariable String keyword){
        return postService.findByKeyword(keyword);
    }
    @GetMapping("/api/posts/search/id/{id}")
    public List<PostDto> findByClientId(@PathVariable Long id){
        return postService.findByClientId(id);
    }
    @GetMapping("/api/posts/search/cate/{category}")
    public List<PostDto> findByCategory(@PathVariable String category){
        return postService.findByCategory(category);
    }
    @PutMapping("/api/posts/update/{id}")
    public Long updateEnd(@PathVariable Long id, @RequestBody PostEndDto postEndDto) {
        return postService.updateEnd(id, postEndDto);
    }

    @PutMapping("/api/posts/update/{id}/{state}")
    public Long updateState(@PathVariable Long id, @PathVariable int state) {
        return postService.updateState(id, state);
    }


}
