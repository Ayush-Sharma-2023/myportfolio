import { useState } from 'react';
import style from '../CSS_files/achievements.module.css';

export default function Certificates() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleClick = (achievement) => {
    setSelectedAchievement(achievement);
  };

  return (
    <>
      <br /><br /><br /><br />
      

      <div className={style.achievements}>
        <p className={style.title}>My Achievements</p>
        <div className={style.boxes}>

          <div
            className={style.achieveDetails}
            onClick={() => handleClick('achievement1')}
          >
            <div className={style.codechef}></div>
            <p className={style.certiAbout}>Programming Achievements</p> <br />
            <p className={style.certiDetail}>My collection of Certificates, ranks and badges I earned from various Coding platforms</p>
          </div>

          <div
            className={style.achieveDetails}
            onClick={() => handleClick('achievement2')}
          >
            <div className={style.coCurriculum}></div>
            <p className={style.certiAbout}>Co-Curriculum Achievements</p><br />
            <p className={style.certiDetail}>My collection of Certificates, ranks and badges I earned from various Coding platforms</p>
          </div>

          <div
            className={style.achieveDetails}
            onClick={() => handleClick('achievement3')}
          >
            <div className={style.others}></div>
            <p className={style.certiAbout}>Course Certifications</p><br />
            <p className={style.certiDetail}>My collection of Certificates, ranks and badges I earned from various Coding platforms</p>
          </div>

        </div>
        <br /><br /><br /><br /><br /><br /><br />
      
        {selectedAchievement === 'achievement1' && <div className="achievement1">
          Details of Achievement 1
          </div>}
        {selectedAchievement === 'achievement2' && <div className="achievement2">
          Details of Achievement 2
          </div>}
        {selectedAchievement === 'achievement3' && <div className="achievement3">
          Details of Achievement 3
          </div>}

        
      </div>
    </>
  );
}
