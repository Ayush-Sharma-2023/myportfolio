import style from "../CSS_files/achievements.module.css";

export default function Certificates(){
    return(
        <>
        <h2>Test</h2>
        <h1>Certificates</h1>

        <div className={style.achievements}>
        <p className={style.title}>My Achievements</p>
        <div className={style.boxes}>
            <div className={style.codechef}>
                <div className={style.pic}></div>
                <p>About my achievements</p>
                <p> Details</p>
                
                
            </div>
            <div className={style.coCurriculum}></div>
            <div className={style.others}></div>

        </div>
        </div>

        
        
        
        </>
    );
}