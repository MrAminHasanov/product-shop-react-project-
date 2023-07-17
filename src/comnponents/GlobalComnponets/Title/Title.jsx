import c from "./Title.module.scss";

function Title({ context }) {
  return (
    <div className={c.component}>
      <h2 >{context}</h2>
    </div>
  );
}

export default Title;
