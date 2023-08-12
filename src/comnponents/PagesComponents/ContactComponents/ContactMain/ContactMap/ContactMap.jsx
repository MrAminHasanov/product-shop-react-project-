import c from "./ContactMap.module.scss";

function ContactMap() {
  return (
    <div className={c.component}>
      <div className={c.mapBox}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.1703016261454!2d-73.97962029989718!3d40.62612610014955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244d768b62d19%3A0x9616b98b5b7f4c70!2s49th%20Rd%2C%20Brooklyn%2C%20NY%2011204%2C%20USA!5e0!3m2!1sen!2saz!4v1691822684571!5m2!1sen!2saz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactMap;
