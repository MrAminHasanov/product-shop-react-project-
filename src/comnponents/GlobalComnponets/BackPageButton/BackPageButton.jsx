import { useNavigate } from "react-router-dom";
import c from "./BackPageButton.module.scss";

function BackPageButton() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div onClick={()=> goBack()} className={c.component}>
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
}

export default BackPageButton;
