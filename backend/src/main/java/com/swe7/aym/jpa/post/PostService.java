package com.swe7.aym.jpa.post;

import com.swe7.aym.jpa.category.Category;
import com.swe7.aym.jpa.category.CategoryRepository;
import com.swe7.aym.jpa.member.Member;
import com.swe7.aym.jpa.member.MembersService;
import com.swe7.aym.jpa.member.dto.MemberDto;
import com.swe7.aym.jpa.post.dto.*;
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

        Post res = Post.builder()
                .client(client.toEntity())
                .product(requestDto.getProduct())
                .contents(requestDto.getContents())
                .destination(requestDto.getDestination())
                .category(categoryRepository.findByCategoryId(requestDto.getCategory()))
                .client_star(0)
                .helper_star(0)
                .fee(requestDto.getFee())
                .cost(requestDto.getCost())
                .createTime(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toString())
                .state(0)
                .build();
        return postRepository.save(res).getPostId();
    }

    public Long updateStar(Long id, PostEndDto postEndDto, String email) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        int client_star = post.getClient_star();
        int helper_star = post.getHelper_star();
        if (post.getClient().getEmail().equals(email)){
            client_star = postEndDto.getStar();
        }
        if (post.getHelper().getEmail().equals(email)){
            helper_star = postEndDto.getStar();
        }
        post.updateEnd( client_star, helper_star);
        if (post.getClient_star() != 0 && post.getHelper_star() != 0)
            post.updateState(7);
        else
            post.updateState(6);
        return id;
    }

    public void updateFirst(Long id){
        Post post = postRepository.findById(id).get();
        if (post.getState() == 1){
            post.updateState(2);
        }
        else {
            post.updateState(3);
        }
    }

    public void updateSecond(Long id){
        Post post = postRepository.findById(id).get();
        if (post.getState() == 3){
            post.updateState(4);
        }
        else {
            post.updateState(5);
        }
    }

    public Long updateHelper(Long id, String email) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다!"));
        Member helper = membersService.findByEmail(email).toEntity();
        post.updateHelper(helper);
        post.updateState(1);
        return id;
    }

    public PostResponseDto findById(Long target_id) {
        Post entity = postRepository.findById(target_id)
                .orElseThrow(() -> new IllegalArgumentException("게시글 조회 : 잘못된 아이디"));
        return new PostResponseDto(entity);
    }

    public PostStateDto findByIdForState(Long target_id) {
        Post entity = postRepository.findById(target_id)
                .orElseThrow(() -> new IllegalArgumentException("게시글 조회 : 잘못된 아이디"));
        return new PostStateDto(entity);
    }

    public List<PostDto> findByState(int target_state) {
        return postRepository.findByState(target_state)
                .stream()
                .map(PostDto::new)
                .collect(Collectors.toList());
    }

    public List<PostSimpleDto> findByRecentWithEmail(String email) {
        int state = 0; // 등록되서 매칭안된 것만
        MemberDto client = membersService.findByEmail(email);
        List<PostSimpleDto> res = postRepository.findByClientAndState(client.toEntity(), state)
                .stream()
                .map(PostSimpleDto::new)
                .collect(Collectors.toList());

        res.addAll(postRepository.findByStateOrderByCreateTime(state)
                .stream()
                .map(PostSimpleDto::new)
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

    public Long updateCancel(Long id) {
        Post post = postRepository.findById(id).get();
        post.updateState(8);
        return post.getPostId();
    }

    public List<PostHistDto> findByEmail(String email) {
        Member member =  membersService.findByEmail(email).toEntity();
        List<PostHistDto> res = postRepository.findByClientOrHelper(member, member).stream()
                .map(PostHistDto::new)
                .collect(Collectors.toList());
        return res;
    }

    public List<PostSimpleDto> findByEmailAndCancelled(String email) {
        Member member =  membersService.findByEmail(email).toEntity();
        List<PostSimpleDto> res = postRepository.findByClientAndState(member, 3)
                .stream()
                .map(PostSimpleDto::new)
                .collect(Collectors.toList());
        res.addAll(postRepository.findByHelperAndState(member, 3)
                .stream()
                .map(PostSimpleDto::new)
                .collect(Collectors.toList()));
        return res;
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}
