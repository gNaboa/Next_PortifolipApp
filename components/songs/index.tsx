import styles from './styles.module.scss'
export function Songs(){
    return(
        <div className={styles.Container} >
       
           
           <div className={styles.retancle}></div> 
            <div className={styles.geometric}>
               
            </div>
            <div className={styles.title}>
                    <h1>Músicas principais</h1>
                 </div>
            <div className={styles.iframeContainer}>
             <div className={styles.iframe}>
                 <iframe  width="100%" height="100%" scrolling="no"  allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1215621802&color=%232e1e36&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true%22%3E"></iframe>
            </div>  
          </div>

         
        </div>
       
    )
}