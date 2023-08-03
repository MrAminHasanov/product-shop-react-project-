import c from './CaruselBox.module.scss'

function CaruselBox({ info }) {
  return (
    <div className={c.component} style={{ borderColor: info.bg }}>
      <div className={c.inner}>
        <img className={c.image} src={info.img} alt={info.name}></img>
        <div className={c.title}>{info.name}</div>
      </div>
    </div>
  )
}

export default CaruselBox