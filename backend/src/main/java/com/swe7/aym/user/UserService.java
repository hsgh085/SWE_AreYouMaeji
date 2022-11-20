package com.swe7.aym.user;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.swe7.aym.user.dto.UserDto;
import com.swe7.aym.user.dto.UserSaveDto;
import com.swe7.aym.user.dto.UserUpdateDto;
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
public class UserService {
    private final UserRepository userRepository;

    public Long save(UserSaveDto requestDto){
        return userRepository.save(requestDto.toEntity()).getUserId();
    }

    public Long update(String email, UserUpdateDto requestDto){
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) {
            user.get().update(
                    requestDto.getNickname(),
                    requestDto.getPhone_number(),
                    user.get().getNo_report()
            );
            return user.get().getUserId();
        }
        else {
            return 0L;
        }
    }

    public UserDto findByEmail(String email) {
        Optional<User> entity = userRepository.findByEmail(email);
        if(entity.isPresent()) {
            return new UserDto(entity.get());
        }
        else {
            return null;
        }
    }
    public float getAvgStar(String email) {
        try {
            float client_sum = userRepository.getSumClientStar(email);
            float helper_sum = userRepository.getSumHelperStar(email);
            int cnt = userRepository.getCntStar(email);
            return client_sum + helper_sum / cnt;
        }
        catch (Exception e) {
            return 0;
        }
    }

    public Boolean incNoRep(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            user.get().update(
                    user.get().getNickname(),
                    user.get().getPhone_number(),
                    user.get().getNo_report() + 1
            );
            return true;
        }
        else return false;
    }

    public List<User> findAll(){
        return userRepository.findAll();
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
            sb.append("&client_id=e1a79b41fcfcd1cdc53b674ddca7fe1f"); //본인이 발급받은 key
            sb.append("&redirect_uri=http://localhost:3000/oauth/callback/kakao"); // 본인이 설정한 주소
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
    public UserDto getUserInfo(String access_Token) {
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

            Boolean isRegisteredUser = userRepository.existsByEmail(email);
            if (isRegisteredUser){
                return this.findByEmail(email);
            }
            else {
                return new UserDto();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return new UserDto();
    }
}
