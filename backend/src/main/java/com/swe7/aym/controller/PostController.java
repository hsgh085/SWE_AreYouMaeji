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
@RequestMapping(value = "/api/posts/*")
public class PostController {
    private final PostService postService;

    @PostMapping("/")
    public Long save(@RequestBody PostSaveDto requestDto) {
        return postService.save(requestDto);
    }
    @GetMapping("/{id}")
    public PostDto findById(@PathVariable Long id){
        return postService.findById(id);
    }
    @GetMapping("/")
    public List<PostDto> findByRecent(){
        return postService.findByRecent();
    }
    @GetMapping(value ="/search/{state}", headers = "key=state")
    public List<PostDto> findByState(@PathVariable int state){
        return postService.findByState(state);
    }
    @GetMapping(value ="/search/{keyword}", headers = "key=word")
    public List<PostDto> findByKeyword(@PathVariable String keyword){
        return postService.findByKeyword(keyword);
    }
    @GetMapping(value ="/search/{id}", headers = "key=id")
    public List<PostDto> findByClientId(@PathVariable Long id){
        return postService.findByClientId(id);
    }
    @GetMapping(value ="/search/{category}", headers = "key=cate")
    public List<PostDto> findByCategory(@PathVariable String category){
        return postService.findByCategory(category);
    }
    @PutMapping("/{id}")
    public Long updateEnd(@PathVariable Long id, @RequestBody PostEndDto postEndDto) {
        return postService.updateEnd(id, postEndDto);
    }

    @PutMapping("/{id}/{state}")
    public Long updateState(@PathVariable Long id, @PathVariable int state) {
        return postService.updateState(id, state);
    }


}
