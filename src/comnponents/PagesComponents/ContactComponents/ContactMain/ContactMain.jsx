import c from "./ContactMain.module.scss";
import ContactInfoContainer from "./ContactInfoContainer/ContactInfoContainer";
import SecondHeader from "comnponents/GlobalComnponets/SecondHeader/SecondHeader";
import ContactMap from "./ContactMap/ContactMap";
import ContactMesage from "./ContactMesage/ContactMesage";

function ContactMain() {
  return (
    <div className={c.component}>
      <SecondHeader title={"Contact Us"} text={"find out more about us"} />
      <ContactInfoContainer />
      <ContactMap />
      <ContactMesage />
    </div>
  );
}

export default ContactMain;
