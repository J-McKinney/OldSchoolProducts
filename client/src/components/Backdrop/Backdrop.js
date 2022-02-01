import Styles from "./Backdrop.module.css";

const Backdrop = ({ click, show }) => {
  return show && <div className={Styles.backdrop} onClick={click}></div>;
};

export default Backdrop;
