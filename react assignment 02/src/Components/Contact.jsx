import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const Contact = () => {
  return (
    <div className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-form">
        <CustomInput placeholder="Your Name" />
        <CustomInput placeholder="Email Address" />
        <CustomInput placeholder="Purpose of Contact" />
        <CustomButton text="Submit" />
      </div>
    </div>
  );
};

export default Contact;