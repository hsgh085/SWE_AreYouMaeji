import Header from "../../component/Header/Header";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { HiSpeakerphone } from "react-icons/hi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./MyPageMain.module.css";
import Rate from "../../component/Rate/Rate";
import useUser from "../../hooks/use-user";

export default function MyPageMain() {
  const [loading, error, user] = useUser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
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
            <Rate />
          </li>
        </ul>
      </div>
      <ul>
        <Link to="/ProfileSetting">
          <li className={styles.list}>
            <BsFillPersonFill className={styles.icon} />
            <span>프로필 수정</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/ErrandDist">
          <li className={styles.list}>
            <FaListUl className={styles.icon} />
            <span>심부름내역</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/CancelledErrand">
          <li className={styles.list}>
            <ImCancelCircle className={styles.icon} />
            <span>취소된 심부름</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/TermsOfService">
          <li className={styles.list}>
            <HiSpeakerphone className={styles.icon} />
            <span>공지사항</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>

        <Link to="/Ask">
          <li className={styles.list}>
            <RiQuestionnaireLine className={styles.icon} />
            <span>문의하기</span>
            <IoIosArrowForward className={styles.forward} />
          </li>
        </Link>
      </ul>
    </>
  );
}
