import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth(+1)}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDate = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime(); // 이번년도 이번월의 1일

      const lastDate = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime(); // 이번년도 이번월의 마지막 날짜

      setData(
        diaryList.filter((it) => firstDate <= it.date && it.date <= lastDate)
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
