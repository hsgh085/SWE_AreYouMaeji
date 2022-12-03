# 희선 프론트

담당페이지: 마이페이지 메인, 프로필설정, 심부름 내역, 취소된 심부름 내역, 문의, 공지사항, 평가하기


https://mui.com/material-ui/getting-started/installation/

위 링크로 가서 npm 또는 yarn으로 되어있는 명령어로 모두 설치해야함. 
그래야 다이얼로그가 뜰 수 있음.



## 마이페이지 메인(MyPage/MyPageMain)

우선 임의로 json파일 생성하고, 거기서 유저 정보 받아옴.



`개선해야할 사항`

서버로부터 평점 정보 받아와야함.





## 프로필수정(MyPage/ProfileSetting)

성별(남자, 여자 라디오 버튼) css(component/Radio/Radio.module.css)에서 hover이벤트만 되고, check이벤트가 먹히지 않음..!! 이유 찾아보는 중..



`개선해야할 사항`

성별 클릭했을 때, css 변경되어야함.

수정 완료하면, 마이페이지 메인으로 이동해야함.




## 심부름 내역(MyPage/ErrandList)

임의로 심부름 내역 json 파일 생성해서 테스트함.

심부름 내역으로 받아올 json파일에 상대방한테 매긴 별점정보 있다고 가정함.



`개선해야할 사항`

별점 수정하면, 수정한 별점 정보 백엔드로 보내는 함수 필요함.





## 취소된 심부름 내역(MyPage/CancelledErrand)

임의로 심부름 내역 json 파일 생성해서 테스트함.

신고되는 지 프론트로 보여주기만 하려고, 상대방에 대한 신고 누적횟수를 증가시켜서 백엔드로 보내지 않음.





## 문의(MyPage/Ask)

완료





## 공지사항(MyPage/TermOfService)

완료






## 평가하기 (Errand/Rating)

`개선해야할 사항`

별점 등록하면 별점 정보 백엔드로 정보 전달해야함.

등록하면 메인 페이지로 이동해야함.





