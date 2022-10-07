import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setoriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)

  const diaryList = useContext(DiaryStateContext);
  // console.log(diaryList)

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);

      if (targetDiary) {
        setoriginData(targetDiary);
      } else {
        // 만약 일기가 5번까지 있는데 /edit/9로 이동했을경우 홈으로이동, 뒤로가지 못하게
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
