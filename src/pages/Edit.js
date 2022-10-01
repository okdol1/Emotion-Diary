import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();

  const id = serchParams.get("id");
  console.log(id);

  const mode = serchParams.get("mode");
  console.log(mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>아곳은 일기 수정 페이지입니다.</p>
      <button onClick={() => setSearchParams({ who: "okdol" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
