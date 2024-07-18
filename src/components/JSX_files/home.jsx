// import '../CSS_files/home.css';
import "../CSS_files/tags.css";
// import photo from "../../images/profileIcon.jpg";
import style from "../CSS_files/home.module.css";

export default function home() {
  return (
    <>
      <div className="home">
        <h2>Test</h2>
        <h1> HOME</h1>

        <div className={style.container}>
          <div className="left">
            <p className={style.about}>
              Hi I'm <br />
              Ayush Sharma <br />
              <span className={style.FD}>Frontend Developer</span>
            </p>

            <p className={style.subAbout}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quaerat impedit saepe, et nobis eveniet dolorem. Minus dolorem
              magni vitae?
            </p>
          </div>
          <div className="right">
            {/* <img className={style.profileIcon} src={photo} alt="" /> */}
            <div className={style.profileIcon}></div>
          </div>
        </div>
      </div>
    </>
  );
}
