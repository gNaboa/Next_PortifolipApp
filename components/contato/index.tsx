import { height } from 'dom7'
import styles from './styles.module.scss'
import {FaSoundcloud,FaInstagram,FaLinkedin,FaBandcamp,FaYoutube} from 'react-icons/fa'

import { useContext } from 'react'




export function Contact(){

    return(
        <div className={styles.container} >

            <div className={styles.title}>
               <h1>Contato</h1>
            </div>

            <div className={styles.formulario}>

            <form action="">
                 <input  placeholder="Nome" type="text"  />
                 <input placeholder="Email" type="text"  />
                 <textarea   placeholder="Mensagem" name="" id="" cols={30} rows={10}></textarea>
                 <button>Enviar</button>
            </form>
            </div>
               
            <div className={styles.footer}>
                     <p>Bitdreamer Sound Design</p>
                     <strong>wesleyferreira@gmail.com</strong>

                     <div className={styles.icons} >
                         <div  onClick={()=> window.open(" https://soundcloud.com/bitdreamersx", '_blank')}> <FaSoundcloud size="30"  /></div> 
                          <div><FaInstagram onClick={()=> window.open("https://www.instagram.com/bitdreamersd/", '_blank')} size="30" /></div> 
                           <div><FaLinkedin onClick={()=> window.open("https://www.linkedin.com/in/bitdreamersd/", '_blank')}  size="30"/></div>
                          <div> <FaBandcamp  onClick={()=> window.open("https://bitdreamersd.bandcamp.com/", '_blank')}  size="30"/></div>
                         <div><FaYoutube  onClick={()=> window.open("https://www.youtube.com/channel/UChQEPbyYRd7tw5qeYF7CSNQ", '_blank')} size="30"/></div>  
                     </div>
            </div>
          
        </div>
      
    )
}
