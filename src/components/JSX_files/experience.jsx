import style from "../CSS_files/experience.module.css";

export default function Experience() {
  return (
    <>
      <h1>Test</h1>
      <h1>Test</h1>

      <div className={style.timeline}>

      
        <div className={style.container}>
          <div className={style.jobD}>
            <div className={style.pin}>
              <div className={style.dot}></div>
              <div className={style.Vline}></div>
            </div>
            <div className={style.content}>
              <p className={style.role}>Frontend Developer Intern</p>
              <p className={style.duration}>May 2024 - August 2024</p>

              
              
                <p className={style.company}>
                <a href="https://rnpsoft.framer.website/" target="_blank"> @Rnpsoft</a> </p>
                <br />

              <p className={style.jobDesc}>
                Worked in a team <br />
                Worked on projects using React <br />
                Utilized Git and GitHub for collaboration <br />
                Deployed websites using GitHub
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
