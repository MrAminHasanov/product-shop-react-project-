import c from "./EmailColumn.module.scss";

function EmailColumn() {
  return (
    <div className={c.component}>
      <div className={c.title}>Join Our Newsletter Now</div>
      <div className={c.text}>
        Get E-mail updates about our latest shop and special offers.
      </div>
      <div className={c.input}>
        <input type="text" placeholder="Enter your mail" />
        <button>SUBSCRIBE</button>
      </div>
      <div className={c.socialIcons}>
        <div>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div>
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  );
}

export default EmailColumn;
