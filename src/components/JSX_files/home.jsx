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
            {/* <div className={style.profileIcon}></div> */}

            {/* ORBIT TEST */}
            <div className={style.solar}>
            <div className={style.vector}></div>

            <div className={style.orbit}>
              <div className={style.logo}></div>
            </div>

            <div className={style.orbit2}>
              <div className={style.logo2}></div>
            </div>
            <div className={style.orbit3}>
              <div className={style.logo3}></div>
            </div>
            <div className={style.orbit4}>
              <div className={style.logo4}></div>
            </div>
            <div className={style.orbit5}>
              <div className={style.logo5}></div>
            </div>
          </div>
            {/* ORBIT TEST ENDS */}
            {/* <span>ORBIT LOGO HERE</span> */}
          </div>
        </div>
      </div>
    </>
  );
}
