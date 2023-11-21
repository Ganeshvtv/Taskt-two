import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Main } from 'next/document'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import background from "../pages/hdhome.jpg"


export default function Home() {
  return (
    <div className={styles.container}>

  <nav className="flex items-center justify-between">
  
<div className="flex items-center">
      <Image src="/canadianhomess.jpg" className='logo' width={210} height={100} />
    </div>
    <div className="logo">
      <FontAwesomeIcon icon={faPhone} className='logo' />
      <span className="mr-4">+78273652365</span>

      <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
      <span>canadianhomes@gmail.com</span>
    </div>
  </nav>
       <main className={styles.main} >   
<Image src={background} alt="background image" width={2000} height={1500}/>

</main>
<main className={`${styles.main} bg-custom`}>

        
      <div className={`bg-custom min-h-screen`}>
      
    </div>   
    
        <h1 className={styles.title}>
         Featured On 
        </h1>
<div className={styles.grid} >
      <Image class="h-40 rounded w-full object-cover object-center mb-6"width={200} height={150} src="amazon.svg" alt="content"/>
      <Image class="h-40 rounded w-full object-cover object-center mb-6"width={200} height={150} src="facebook.svg" alt="content"/>
      <Image class="h-40 rounded w-full object-cover object-center mb-6"width={200} height={150} src="airbnb.svg" alt="content"/>

      <Image class="h-40 rounded w-full object-cover object-center mb-6"width={200} height={150} src="google.svg" alt="content"/>

      </div>
      <div className={styles.grid}>
      <div className={styles.card}>
       
          <Image class="h-40 rounded w-full object-cover object-center mb-6" width={200} height={150}src="/home.jpg" alt="content"/>
          <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        
      </div>
      
      
      <div className={styles.card}>
       
          <Image class="h-40 rounded w-full object-cover object-center mb-6"width={200} height={150} src="/mobile.jpg" alt="content"/>
          <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        
      </div>
      <div className={styles.card}>
       
          <Image class="h-40 rounded w-full object-cover object-center mb-6" width={200} height={150} src="/people.jpg" alt="content"/>
          <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        
      </div>
     
      </div>

<main>
<h1 className={styles.title}>
         The Canadian Home
        </h1>
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            
          <p>Canadian Roofing was the only company whose representative took the time to sit down with me and explain everything clearly and carefully and answer all my questions.</p>
            <h2>John Brown &rarr;</h2>
          </a>

          <a href="" className={styles.card}>
            
          <p>Canadian Roofing was the only company whose representative took the time to sit down with me and explain everything clearly and carefully and answer all my questions.</p>
            <h2>John Brown &rarr;</h2>
          </a>

          <a
            href=""
            className={styles.card}
          >
           
            <p>Canadian Roofing was the only company whose representative took the time to sit down with me and explain everything clearly and carefully and answer all my questions.</p>
            <h2>John Brown &rarr;</h2>
          </a>
   </div>
      </main>
      <footer className={styles.footer}>
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span class="ml-3 text-xl">Copyright &#169; 2023 The Canadian Home.Inc</span>
    </a>
    
  </div>

      </footer>
      </main>
  
   </div>
  )
}
