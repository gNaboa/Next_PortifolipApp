import styles from './styles.module.scss'
import Youtube from 'react-youtube'


type infor={
  
    mainprojects:{
      youtubeid:{
        text:string
      }[],
      projecttitle:{
        text:string
      }[],
      projectdescription:{
        text:string
      }[],
      projectlink:{
        text:string
      }[],
      avaiable:{
        text:string
      }[]
    }[]
  }
  
  type ProjectsProps = {
      infos:infor
  }
  


export function Projects({infos}:ProjectsProps){

    

    return(
        <div className={styles.Container} >
           <div className={styles.title}>
               <h1>Projetos Principais</h1>
           </div>

           {infos.mainprojects.map((project,i)=>{

              if(i%2==0){
                return(
                  <div key={i} className={styles.content2}>
                  <Youtube className={styles.video}  videoId={String(project.youtubeid)} />
  
                  <div className={styles.descricao} >
                       <h1>{project.projecttitle}</h1>
                         <p>{project.projectdescription} </p>
                       
                        <a href={String(project.projectlink)}><p>{project.avaiable}</p></a>  
                     
  
                  </div>
                  
            </div>
                 )
              }

               return(
                <div key={i} className={styles.content}>
                <Youtube className={styles.video}  videoId={String(project.youtubeid)} />

                <div className={styles.descricao} >
                     <h1>{project.projecttitle}</h1>
                       <p>{project.projectdescription} </p>
                     
                      <a href={String(project.projectlink)}><p>{project.avaiable}</p></a>  
                   

                </div>
                
          </div>
               )
           })}
          
       
        </div>
    )
}