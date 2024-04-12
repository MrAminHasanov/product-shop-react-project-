import Title from "comnponents/GlobalComnponets/Title/Title";
import c from "./ContactMesage.module.scss";

function ContactMesage() {
  return (
    <div className={c.component}>
      <Title context={"Leave Message"} />
      <div className={c.inputBox}>
        <div className={c.firstInputBox}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
        </div>
        <textarea className={c.mesageInput} placeholder="Your Message" id="" cols="30" rows="10"></textarea>
        <button>SEND MESSAGE</button>
      </div>
    </div>
  );
}

export default ContactMesage;
