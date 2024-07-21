import style from "../CSS_files/experience.module.css";

export default function Experience() {
  return (
    <>
      <h1>Test</h1>
      <h1>Test</h1>

      <p className={style.title}>My Experiences</p>

      <div className={style.timeline}> <br />

      
      
        
        <div className={style.container}>
          <div className={style.jobD2}>
            <div className={style.pin}>
              <div className={style.dot}></div>
              <div className={style.Vline}></div>
              
            </div>
            <div className={style.content}>
              <p className={style.role}>Frontend Developer Intern</p>
              <p className={style.duration}>May 2024 - August 2024</p>

              
              
                <p className={style.company}>
                <a href="https://rnpsoft.framer.website/" target="_blank" rel="noreferrer"> @Rnpsoft</a> </p>
                <br />

              <p className={style.jobDesc}>
                Worked in a team of 5 members <br />
                Worked on projects using React <br />
                Utilized Git and GitHub for collaboration <br />
                Deployed websites using GitHub
              </p>
            </div>
          </div>
        </div>


          <div className={style.container}>
          <div className={style.jobD1}>
           <div className={style.content}>
              <p className={style.role1}>Bachelor of Technology  <br />in Computer Science  </p> <br />
              <p className={style.duration1}>Nov 2022 - Till date (22-26)</p>

              
              
                <p className={style.company1} >
                <a className={style.company1} href="https://www.sharda.ac.in/" target="_blank" rel="noreferrer"> @Sharda University</a> </p>
                <br />

              <p className={style.jobDesc1}>
                Student at Sharda University <br />
              Pursuing course in Computer Science <br />
              Acquiring knowledge in Data Structures <br /> and Algorithms in Java


                
                
              </p>
            </div>
            <div className={style.pin}>
              <div className={style.dot}></div>
              <div className={style.Vline}></div>
              
            </div>
          
          </div>
        </div>
        
      </div>
    </>
  );
}
