import React, { useEffect, useState } from "react";
import { RiAlarmWarningFill } from "react-icons/ri";
import styles from "./Report.module.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

export default function Report({ postId, userId }) {
  const [errand, setErrand] = useState({});
  const [open, setOpen] = useState(false);
  const [ok, setOk] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseYes = () => {
    setOpen(false);
    setOk(true);
  };
  const handleCloseNo = () => {
    setOpen(false);
    setOk(false);
  };
  const handleCloseAlert = () => {
    setOk(false);
  };

  useEffect(() => {
    let model = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("email"),
        'Content-Type': 'application/json',
      },
    };
    fetch(`/api/posts/` + postId, model)
      .then((res) => res.json())
      .then((data) => {
        console.log(`postId: ${postId} 데이터 받아옴`);
        setErrand(data);
      });
    return () => {
      console.log(`postId: ${postId} 데이터 청소`);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.role}>의뢰인</p>
          <p>{errand.client_nick}</p>
        </div>
        <div className={styles.text}>
          <p className={styles.role}>심부름꾼</p>
          <p>{errand.helper_nick}</p>
        </div>
        <div className={styles.report} onClick={handleClickOpen}>
          <RiAlarmWarningFill size="25" color="#EB4C36" />
          <p>신고하기</p>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"신고하기"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {userId === errand.client_nick
                ? errand.helper_nick
                : errand.client_nick}
              님을 신고하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseYes}>신고</Button>
            <Button onClick={handleCloseNo}>취소</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={ok}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"신고완료"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              신고가 접수되었습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert}>확인</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
