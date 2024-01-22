import styles from './App.module.css';
import { Header } from './Header/Header';
import { AbaTarefas } from './AbaTarefas/AbaTarefas';

import './global.css';


export function App() {

 
  return (
   
      <div className={styles.principal}>
             
        < Header/>
        <AbaTarefas/>
      </div>




      

  )
}



