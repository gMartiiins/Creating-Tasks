import styles from './Tarefas.module.css';
import { Trash } from 'phosphor-react';


interface TarefasProps {

    todasTarefas: string;
    deletandoTarefas: (tarefas: string) => void;
}





export function Tarefas({todasTarefas,  deletandoTarefas }: TarefasProps) {

    function usuarioDeletarTarefa() {

        deletandoTarefas(todasTarefas);
    };


    return (
    
            <form className={styles.container}>
                <p>{todasTarefas}</p>
                <button onClick={usuarioDeletarTarefa} className={styles.trash}>
                    <Trash size={14}/>
                </button>
            </form>  

            
            
       

    );


}