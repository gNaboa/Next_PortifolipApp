import {Navbar} from '../components/navbar/index'
import {Homee} from '../components/home/index'
import {Songs} from '../components/songs/index'
import {Projects} from '../components/projects/index'
import {Sfx} from '../components/sfx/index'
import {OtherProjects} from '../components/other/index'
import {About} from '../components/about/index'
import {Contact} from '../components/contato/index'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import {RichText} from 'prismic-dom'
import { getPrismicClient } from '../service/prismic'


type infor={
  musics:number,
  projects:number,
  since:number,
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
  }[],
  sfxreel:{
    sfxid:string
  }[],
  otherprojects:{
    bandlink:string
  }[],
  about:{
    src:string,
    description:string
  }[]
}

type PortifolioProps = {
    infos:infor[]
}



export default function Home({infos}:PortifolioProps) {

  console.log(infos)
  return (
    <div className={styles.container} >

   
      <Navbar/>
      <Homee infos={{musics:infos[0].musics,projects:infos[0].projects,since:infos[0].since}} />
      <Songs/>
      <Projects  infos={{mainprojects:infos[0].mainprojects}} />
      <Sfx  infos={{sfxreel:infos[0].sfxreel}}  />
      <OtherProjects  infos={{otherprojects:infos[0].otherprojects}} />
      <About  infos={{about:infos[0].about}} />
      <Contact/>
    </div>
  )
}


export const getStaticProps:GetStaticProps =  async () =>{
    

  const prismic = getPrismicClient()
 
  const response =  await prismic.query(Prismic.predicates.at('document.type','portifolio'),{
      fetch:['portifolio.musics','portifolio.projects','portifolio.since','portifolio.mainprojects',
      'portifolio.sfxreel','portifolio.otherprojects','portifolio.about'],
      pageSize:20
     
      
  })
 
   const infos = response.results.map(info=>{
       return(
           {
                 musics:info.data.musics,
                 projects:info.data.projects,
                 since:info.data.since,
                 mainprojects:info.data.mainprojects.map(project=>{
                   return({
                      youtubeid:project.youtubeid[0].text,
                      projecttitle:project.projecttitle[0].text
                      ,
                      projectdescription:RichText.asText(project.projectdescription)
                     ,
                      projectlink:project.projectlink[0].text
                    ,
                      avaiable:project.avaiable[0].text
                      
                   })
                 }),
                 sfxreel:info.data.sfxreel.map(sfx=>{
                   return(
                     {
                       sfxid:sfx.sfxid[0].text
                     }
                   )
                 }),
                 otherprojects:info.data.otherprojects.map(other=>{
                   return({
                     bandlink:other.bandlink[0].text
                   })
                 }),
                 about:info.data.about.map(abt=>{
                   return({
                     src:abt.src[0].text,
                     description:abt.description[0].text
                   })
                 })

           }
       )
   })
 
    
  
  
  return{
      props:{infos},
      revalidate:60
  }
} 
