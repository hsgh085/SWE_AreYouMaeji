package com.swe7.aym.jpa.member;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.swe7.aym.jpa.member.dto.MemberDto;
import com.swe7.aym.jpa.member.dto.MemberSaveDto;
import com.swe7.aym.jpa.member.dto.MemberUpdateDto;
import com.swe7.aym.redis.token.Token;
import com.swe7.aym.redis.token.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class MembersService {
    private final MemberRepository memberRepository;
    private final TokenRepository tokenRepository;

    public Long save(MemberSaveDto requestDto){
        memberRepository.findByEmail(requestDto.getEmail()).ifPresent(m -> {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        });
        return memberRepository.save(requestDto.toEntity()).getMember_id();
    }


    public Long update(String email, MemberUpdateDto requestDto){
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent()) {
            member.get().update(
                    requestDto.getNickname(),
                    requestDto.getPhone_number(),
                    member.get().getNo_report()
            );
            return member.get().getMember_id();
        }
        else {
            return 0L;
        }
    }

    public MemberDto findByEmail(String email) {
        Optional<Member> entity = memberRepository.findByEmail(email);
        if(entity.isPresent()) {
            return new MemberDto(entity.get());
        }
        else {
            return null;
        }
    }

    public float getAvgStar(String email) {
        try {
            float client_sum = memberRepository.getSumClientStar(email);
            float helper_sum = memberRepository.getSumHelperStar(email);
            int cnt = memberRepository.getCntStar(email);
            return client_sum + helper_sum / cnt;
        }
        catch (Exception e) {
            return 0;
        }
    }

    public Boolean incNoRep(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) {
            member.get().update(
                    member.get().getNickname(),
                    member.get().getPhone_number(),
                    member.get().getNo_report() + 1
            );
            return true;
        }
        else return false;
    }

    public List<Member> findAll(){
        return memberRepository.findAll();
    }

    public String getAccessToken(String authorize_code) {

        String access_Token = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=e1a79b41fcfcd1cdc53b674ddca7fe1f");
            sb.append("&redirect_uri=http://localhost:3000/oauth/callback/kakao");
            sb.append("&code=" + authorize_code);
            bw.write(sb.toString());
            bw.flush();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }

            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return access_Token;
    }
    public MemberDto getMemberInfo(String access_Token) {
        String reqURL = "https://kapi.kakao.com/v2/user/me";
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Authorization", "Bearer " + access_Token);

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";
            while ((line = br.readLine()) != null) {
                result += line;
            }
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();
            String email = kakao_account.getAsJsonObject().get("email").getAsString();

            Boolean isRegisteredMember = memberRepository.existsByEmail(email);

            if (isRegisteredMember){
                Token token = Token.builder()
                        .email(email)
                        .accessToken(access_Token)
                        .build();

                if (!tokenRepository.existsByEmail(email))
                    tokenRepository.save(token);
                return this.findByEmail(email);
            }
            else {
                return new MemberDto();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return new MemberDto();
    }
}
