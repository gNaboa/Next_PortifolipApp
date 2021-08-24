import styles from './styles.module.scss'

import Carousel from 'react-elastic-carousel'

import Youtube from 'react-youtube'


type infor={
  
    sfxreel:{
      sfxid:string
    }[]
  }
  
  type SfxProps = {
      infos:infor
  }



export function Sfx({infos}:SfxProps){
    return(
        <div className={styles.container}>   
            <div className={styles.title}>
               <h1>SFX Reel</h1>
            </div>


             <Carousel className={styles.carouselContainer}  showArrows={false}>

               {infos.sfxreel.map((sfx,i)=>{
                   return(
                    <Youtube key={i} className={styles.yt} videoId={sfx.sfxid}></Youtube>
                   )
               })}
            

            </Carousel> 
        </div>
       
    )
}