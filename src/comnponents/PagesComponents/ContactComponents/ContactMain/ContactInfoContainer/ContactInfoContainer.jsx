import c from "./ContactInfoContainer.module.scss";

function ContactInfoContainer() {
  return (
    <div className={c.component}>
      <div className={c.iconBox}>
        <i className="fa-solid fa-phone"></i>
        <div className={c.title}>Phone</div>
        <div className={c.text}>+10123223233</div>
      </div>
      <div className={c.iconBox}>
        <i className="fa-solid fa-location-dot"></i>
        <div className={c.title}>Addres</div>
        <div className={c.text}>60-49 Road 11378 New York</div>
      </div>
      <div className={c.iconBox}>
        <i className="fa-regular fa-clock"></i>
        <div className={c.title}>Open time</div>
        <div className={c.text}>10:00 am to 23:00 pm</div>
      </div>
      <div className={c.iconBox}>
        <i className="fa-regular fa-envelope"></i>
        <div className={c.title}>Email</div>
        <div className={c.text}>Ogani@gmial.com</div>
      </div>
    </div>
  );
}

export default ContactInfoContainer;
