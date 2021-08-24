import styles from './styles.module.scss'




type infor={

    otherprojects:{
      bandlink:string
    }[]
  }
  
  type OtherProps = {
      infos:infor
  }
  



export function OtherProjects({infos}:OtherProps){

    
  const stilo={
    border:0,
    width:280,
    height:440,
}
    return(
         <div className={styles.container} >
                   c
             <div className={styles.title}>
                 <h1>Outros projetos</h1>
         
             </div>

             
            
     <div className={styles.content}>
    
             <div className={styles.iframes}>
      
      
                    <div>
                       {infos.otherprojects.map((other,i)=>{
                           return(
                            <div key={i} >
                            <iframe style={stilo} src={other.bandlink} seamless>
                                    
                            </iframe>
                            </div>
                           )
                       })}
                     
                    </div>
    
           
             </div>
       </div>
       <div className={styles.triangule}></div> 
        </div>
        
    )
}