import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { HiSpeakerphone } from "react-icons/hi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./H_mypage.module.css";
import Header from "../components/Header/Header";
import useUser from "../components/hooks/use-user";
import { BsStarFill } from "react-icons/bs";

export default function H_mypage() {
  const user = useUser();
  //const [rate, setRate]=useRate();
  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("별점 데이터 받아옴");
  //       setRate(data);
  //     });
  //   return () => {
  //     console.log("별점 데이터 청소");
  //   };
  // }, []);
  const rate = 4;
  return (
    <>
      <Header />
      <div className={styles.profile}>
        <p className={styles.name}>{user.nickname}</p>
        <ul>
          <li>
            <p>성별</p>
            <p>{user.gender == 1 ? "남자" : "여자"}</p>
          </li>
          <li>
            <p>전화번호</p>
            <p>{user.phone_number}</p>
          </li>
          <li>
            <p>평점</p>
            {/*todo*/}
            {/*희선님이 만든 Rate 이용?*/}
            {/*아마 희선님꺼 통합되면 해결?*/}
            <div className={styles.star}>
              {Array(rate)
                .fill(0)
                .map((el, i) => (
                  <BsStarFill key={i} size="25" color="#EFC45C" />
                ))}
              {Array(5 - rate)
                .fill(0)
                .map((el, i) => (
                  <BsStarFill key={i} size="25" color="#0A1931" />
                ))}
            </div>
          </li>
        </ul>
      </div>
      <ul>
        <Link to="/M_profile">
          <li className={styles.list}>
            <BsFillPersonFill className={styles.icon} />
            <span>프로필 수정</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/M_list">
          <li className={styles.list}>
            <FaListUl className={styles.icon} />
            <span>심부름내역</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/M_cancel">
          <li className={styles.list}>
            <ImCancelCircle className={styles.icon} />
            <span>취소된 심부름</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/M_service">
          <li className={styles.list}>
            <HiSpeakerphone className={styles.icon} />
            <span>공지사항</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/M_Ask">
          <li className={styles.list}>
            <RiQuestionnaireLine className={styles.icon} />
            <span>문의하기</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>
      </ul>
      <div className={styles.footer}>
        &copy;{new Date().getFullYear()} Errand App
      </div>
    </>
  );
}
