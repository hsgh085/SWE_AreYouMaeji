package com.swe7.aym.jpa.controller;

import com.swe7.aym.jpa.post.PostService;
import com.swe7.aym.jpa.post.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/posts")
public class PostController {
    private final PostService postService;

    @PostMapping("")
    public Long save(@RequestBody PostSaveDto requestDto) {
        return postService.save(requestDto);
    }
    @GetMapping("/{id}")
    public PostResponseDto findById(@PathVariable Long id){
        return postService.findById(id);
    }
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id){
        postService.deletePost(id);
    }
    @GetMapping("/cancel")
    public List<PostSimpleDto> findCancelled(@RequestHeader(value="Authorization") String email){
        return postService.findByEmailAndCancelled(email);
    }
    @GetMapping("/my")
    public List<PostHistDto> findMy(@RequestHeader(value="Authorization") String email){
        return postService.findByEmail(email);
    }
    @GetMapping("")
    public List<PostSimpleDto> findByRecentWithEmail(@RequestHeader(value="Authorization") String email){
        return postService.findByRecentWithEmail(email);
    }
    @GetMapping(value ="/search/{state}", headers = "key=state")
    public List<PostDto> findByState(@PathVariable int state){
        return postService.findByState(state);
    }
    @GetMapping(value ="/search/{keyword}", headers = "key=word")
    public List<PostDto> findByKeyword(@PathVariable String keyword){
        return postService.findByKeyword(keyword);
    }
    @GetMapping(value ="/search/{category}", headers = "key=cate")
    public List<PostDto> findByCategory(@PathVariable String category){
        return postService.findByCategory(category);
    }
    @PutMapping("/{id}/star")
    public Long updateStar(@PathVariable Long id, @RequestBody PostEndDto postEndDto, @RequestHeader(value="Authorization") String email) {
        return postService.updateStar(id, postEndDto, email);
    }
    @PutMapping("/{id}/matched")
    public Long updateMatched(@PathVariable Long id, @RequestHeader(value="Authorization") String email) {
        return postService.updateHelper(id, email);
    }
    @GetMapping("/state/{id}")
    public PostStateDto findByIdForState(@PathVariable Long id){
        return postService.findByIdForState(id);
    }
    @PutMapping("/{id}/ok")
    public void updateFirst(@PathVariable Long id) {
        postService.updateFirst(id);
    }
    @PutMapping("/{id}/end")
    public void updateSecond(@PathVariable Long id) {
        postService.updateSecond(id);
    }
    @PutMapping("/{id}/cancelled")
    public Long updateCancel(@PathVariable Long id) {
        return postService.updateCancel(id);
    }

}
