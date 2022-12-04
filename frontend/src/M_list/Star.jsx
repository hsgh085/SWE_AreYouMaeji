import React, { useEffect, useState } from "react";
import styles from "./Star.module.css";
import { BsStarFill } from "react-icons/bs";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import Rate from "../components/Rate/Rate";

export default function Star({ postId, star }) {
  const [errand, setErrand] = useState({});
  const [rate, setRate] = useState(star);
  const [rating, setRating] = useState();
  const [open, setOpen] = useState(false);
  const [ok, setOk] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseYes = () => {
    setOpen(false);
    setRate(rating);
    setOk(true);
  };
  const handleCloseNo = () => {
    setOpen(false);
  };
  const handleCloseAlert = () => {
    setOk(false);
  };
  useEffect(() => {
    fetch(`data/postErrand${postId}.json`)
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
        <div className={styles.rate} onClick={handleClickOpen}>
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
          <p>별점 수정하기</p>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"별점 수정"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
            <Rate setRate={setRating} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseYes}>수정</Button>
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
          <DialogTitle id="alert-dialog-title">{"수정완료"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              별점이 수정되었습니다.
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
