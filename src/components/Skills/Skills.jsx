  import styles from "./Skills.module.css"
  import {BiSolidBadgeCheck} from "react-icons/bi"


export const Skills = () => {
  return (
   <div id="skills" className={styles.SkillMain}>
     <h2 className={styles.title}>My Tech Stack</h2>
    <div className={`${styles.skills__container} ${styles.container} ${styles.grid}`}>
    
          <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Frontend Development</h3>

            <div className={styles.skills__box}>
              <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>HTML</h3>
                    <span className={styles.skills__level}>Intermediate</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>CSS</h3>
                    <span className={styles.skills__level}>Intermediate</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>JavaScript</h3>
                    <span className={styles.skills__level}>Intermediate</span>
                  </div>
                </div>
              </div>

              <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Bootstrap</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Git</h3>
                    <span className={styles.skills__level}>Intermediate</span>
                  </div>
                </div>

                {/* <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Jquery</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Backend Development</h3>

            <div className={styles.skills__box}>
              <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Node Js</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>MySQL</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Firebase</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>
              </div>

              <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>ExpressJs</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>REST Api</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>

                 <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>MongoDb</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Progamming Languages</h3>

            <div className={styles.skills__box}>
              <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Java</h3>
                    <span className={styles.skills__level}>Intermediate</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>C </h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>C++</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Pyhton</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Tools & Technology</h3>

            <div className={styles.skills__box}>
              <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Github</h3>
                    <span className={styles.skills__level}>Intermediate</span>
                  </div>
                </div>

                {/* <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Postman</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div> */}

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>VS Code</h3>
                    <span className={styles.skills__level}>Intermediate</span>
                  </div>
                </div>
              </div>

              <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Figma(UI/UX)</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>
{/* 
                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Hyper</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div> */}

                <div className={styles.skills__data}>
                  <BiSolidBadgeCheck className={styles.badgeCheck}/>

                  <div>
                    <h3 className={styles.skills__name}>Microsoft Office</h3>
                    <span className={styles.skills__level}>Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          
        </div>
   </div>
  )
}
