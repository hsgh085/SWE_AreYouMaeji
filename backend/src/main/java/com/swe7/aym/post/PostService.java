package com.swe7.aym.post;

import com.swe7.aym.category.Category;
import com.swe7.aym.category.CategoryRepository;
import com.swe7.aym.post.dto.PostDto;
import com.swe7.aym.post.dto.PostEndDto;
import com.swe7.aym.post.dto.PostSaveDto;
import com.swe7.aym.user.User;
import com.swe7.aym.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class PostService {
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public Long save(PostSaveDto requestDto) {
        Optional<User> client = userRepository.findByEmail(requestDto.getClient_email());
        Optional<User> helper = userRepository.findByEmail(requestDto.getClient_email());
        if (!client.isPresent() || !helper.isPresent()){
            return 0L;
        }
        Post res = Post.builder()
                .client(client.get())
                .helper(helper.get())
                .contents(requestDto.getContents())
                .category1(categoryRepository.findByContextContaining(requestDto.getCategory1()))
                .category2(categoryRepository.findByContextContaining(requestDto.getCategory2()))
                .client_star(0)
                .helper_star(0)
                .fee(requestDto.getFee())
                .cost(requestDto.getCost())
                .createTime(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toString())
                .state(0)
                .build();
        return postRepository.save(res).getPostId();
    }

    public Long updateEnd(Long id, PostEndDto postEndDto) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        post.updateEnd(
                postEndDto.getClient_star(),
                postEndDto.getHelper_star(),
                postEndDto.getState()
        );
        return id;
    }

    public Long updateState(Long id, int state) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        post.updateState(state);
        return id;
    }
    public PostDto findById(Long target_id) {
         Post entity =  postRepository.findById(target_id)
                .orElseThrow(()->new IllegalArgumentException("게시글 조회 : 잘못된 아이디"));
        return new PostDto(entity);
    }
    public List<PostDto> findByState(int target_state) {
        return postRepository.findByState(target_state)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }
    public List<PostDto> findByRecent() {
        int state = 0; // 등록되서 매칭안된 것만
        return postRepository.findByStateOrderByCreateTime(state)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }
    public List<PostDto> findByKeyword(String target_keyword) {
        return postRepository.findByContentsContaining(target_keyword)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }
    public List<PostDto> findByClientId(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return postRepository.findByClient(user)
                    .stream()
                    .map(PostDto::new)
                    .collect(Collectors.toList());
        }
        else return Collections.emptyList();
    }
    public List<PostDto> findByCategory(String category) {
        Category res1 = categoryRepository.findByContextContaining(category);
        return postRepository.findByCategory1OrCategory2(res1, res1)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }
}