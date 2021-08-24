import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import {BiMenu} from 'react-icons/bi'

export function Navbar(){


    const[button,setButton] = useState(true)
    const[sidebar,setSideBar] = useState(false)
    function showButton(){
        if(window.innerWidth<=670){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    function showSideBar(){
        setSideBar(!sidebar)
    }
    
    useEffect(()=>window.addEventListener('resize',showButton),[])
    

    return(
       <div className={styles.navBar}>
           {button ? <div className={styles.content} >

        
                <button>Músicas principais</button>
                <button>Projetos principais </button>
                <button>SFX Reel</button>
                <button>Outros projetos</button>
                <button>Sobre mim</button>
                <button>Contato</button>
</div>:  <div className={styles.navContent}>      
                <BiMenu onClick={showSideBar} className={styles.navButton} />
                {sidebar &&
                
                <div className={styles.sideBar}>
                    <button>Músicas principais</button>
                <button>Projetos principais </button>
                <button>SFX Reel</button>
                <button>Outros projetos</button>
                <button>Sobre mim</button>
                <button>Contato</button>
                    
                   
                 </div>}
        </div> 
}
       </div>
    )
}