import styles from './styles.module.scss'

type infor={
   
    about:{
      src:string,
      description:string
    }[]
  }
  
  type AboutProps = {
      infos:infor
  }



export function About({infos}:AboutProps){

    return(
        <div className={styles.Container} >
            <div className={styles.title} >
               <h1>Sobre mim</h1>
            </div>
             <div className={styles.about}>
                 <div className={styles.image}>
                     <img src="/images/photo.jpg" alt="" />
                 </div>
                 <div className={styles.description}>
                 {infos.about.map((about,i)=>{
                     return(
                         <p key={i} >{about.description}</p>
                     )
                 })}
                 </div>
             </div>

              {/* <div className={styles.background}></div>  */}
          
        </div>
    )
}