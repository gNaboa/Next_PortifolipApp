
import {FiMusic,FiHeadphones,FiCalendar} from 'react-icons/fi'

import styles from './styles.module.scss'



type infor={
    musics:number,
    projects:number,
    since:number
  }
  
  type HomeProps = {
      infos:infor
  }
  
  


export function Homee({infos}:HomeProps){

    return(
    <div className={styles.container} >
        <div className={styles.banner}>
             <div className={styles.imageContainer}>
                 <img src='/images/banner.jpg' alt="" />
                 <h1>BitDreamer Sound Design</h1>
               
              </div>

              <div className={styles.triangule}>
                <div className={styles.profile}>
                      <p> <FiMusic/> {infos.musics} Musicas desenvolvidas</p>
                      <p> <FiHeadphones/> Participações em {infos.projects} projetos</p>
                      <p> <FiCalendar/> Desde {infos.since}</p>
                </div>

             
              </div>
              
        </div>
        
        </div>
    )
}


