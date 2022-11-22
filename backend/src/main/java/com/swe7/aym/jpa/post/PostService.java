package com.swe7.aym.jpa.post;

import com.swe7.aym.jpa.category.Category;
import com.swe7.aym.jpa.category.CategoryRepository;
import com.swe7.aym.jpa.member.MembersService;
import com.swe7.aym.jpa.member.dto.MemberDto;
import com.swe7.aym.jpa.post.dto.PostDto;
import com.swe7.aym.jpa.post.dto.PostEndDto;
import com.swe7.aym.jpa.post.dto.PostSaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class PostService {
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final MembersService membersService;

    public Long save(PostSaveDto requestDto) {
        MemberDto client = membersService.findByEmail(requestDto.getClient_email());
        MemberDto helper = membersService.findByEmail(requestDto.getClient_email());

        Post res = Post.builder()
                .client(client.toEntity())
                .helper(helper.toEntity())
                .contents(requestDto.getContents())
                .category(categoryRepository.findByContextContaining(requestDto.getCategory()))
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
        Post entity = postRepository.findById(target_id)
                .orElseThrow(() -> new IllegalArgumentException("게시글 조회 : 잘못된 아이디"));
        return new PostDto(entity);
    }

    public List<PostDto> findByState(int target_state) {
        return postRepository.findByState(target_state)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }

    public List<PostDto> findByRecentWithEmail(String email) {
        int state = 0; // 등록되서 매칭안된 것만
        MemberDto client = membersService.findByEmail(email);
        List<PostDto> res = postRepository.findByClient(client.toEntity())
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());

        res.addAll(postRepository.findByStateOrderByCreateTime(state)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList()));
        return res;
    }

    public List<PostDto> findByKeyword(String target_keyword) {
        return postRepository.findByContentsContaining(target_keyword)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }

    public List<PostDto> findByCategory(String category) {
        Category res1 = categoryRepository.findByContextContaining(category);
        return postRepository.findByCategory(res1)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }
}