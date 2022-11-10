package com.swe7.aym.post;

import com.swe7.aym.post.dto.PostDto;
import com.swe7.aym.post.dto.PostSaveDto;
import com.swe7.aym.post.dto.PostUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class PostService {
    //todo

    private final PostRepository postRepository;

    public Long save(PostSaveDto requestDto) {
        return postRepository.save(requestDto.toEntity()).getPostId();
    }

    public void delete(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        postRepository.delete(post);
    }

    public Long update(Long id, PostUpdateDto boardUpdateDto) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        post.update(boardUpdateDto.getTitle(), boardUpdateDto.getContents());
        return id;
    }

    public PostDto findById(Long id) {
        Post entity = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        return new PostDto(entity);
    }

    public List<PostDto> findAllDesc() {
        return postRepository.findAllDesc()
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }
}