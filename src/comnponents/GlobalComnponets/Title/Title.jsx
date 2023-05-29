import c from "./Title.module.scss"; 

function Title({context}) {
  return (
    <h2 className={c.component}>{context}</h2>
  )
}

export default Title