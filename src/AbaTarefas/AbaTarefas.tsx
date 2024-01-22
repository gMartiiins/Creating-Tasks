import { Tarefas } from '../Tarefas/Tarefas'
import styles from './AbaTarefas.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


export function AbaTarefas() {

    const [tarefas, setTarefas] = useState<string[]>([]);
    const [tarefasConcluidas, setTarefasConcluidas] = useState<string[]>([]);

    const [novaTarefa, setNovaTarefa] = useState('');

    function usuarioCriarNovaTarefa(event: FormEvent) {
        event.preventDefault();

        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
    }

    function usuarioEscreverNovaTarefa(event: ChangeEvent<HTMLTextAreaElement>) {
       
        const maxLength = 21; // Defina o número máximo de letras permitidas

        // Limita o comprimento do texto
        const texto = event.target.value.slice(0, maxLength);
    
       
        event.target.setCustomValidity('');
        setNovaTarefa( texto );
    }


    function usuarioTarefaConcluida(event: FormEvent, tarefa: string) {
        event.preventDefault();
        setTarefasConcluidas([...tarefasConcluidas, tarefa]);
        setTarefas(tarefas.filter((concluidas) => concluidas !== tarefa));
      }


    function usuarioTarefaInvalida(event: InvalidEvent<HTMLTextAreaElement>) {
       
        event.target.setCustomValidity('Este Campo é Obrigatorio');
        setNovaTarefa(event.target.value);

    }

    const usuarioEnter = (event: any) => {
        if (event.key === 'Enter' && novaTarefa.trim() !== '') {
            usuarioCriarNovaTarefa(event);
        }
    };

      function contarTarefasRealizar(): number {
        return tarefas.length;
    }

    function contarTarefasConcluidas(): number {
        return tarefasConcluidas.length;
    }

    function TotalTarefas(): number {
        
        const todasTarefas = tarefas.length + tarefasConcluidas.length;
       
        return todasTarefas
        ;
    }


    function deletarTarefa(listaTarefas: string) {

        const novaListaTarefas =  tarefas.filter( tarefa => {
            return tarefa != listaTarefas;
        })
        setTarefas(novaListaTarefas); 
    }  

    function deletarTarefaConluidas(listaTarefasConcluidas: string) {

        const novaListaTarefasConcluidas =  tarefasConcluidas.filter( tarefasConcluidas => {
            return tarefasConcluidas != listaTarefasConcluidas;
        })
        setTarefasConcluidas(novaListaTarefasConcluidas);
    }  



    const novaTarefaVazia = novaTarefa.trim().length === 0;

    return(
        
        <div className={styles.container}>

            <div className={styles.containterArea}>
                
                <strong>Digite a tarefa a ser realizada</strong>
                
                <form onSubmit={usuarioCriarNovaTarefa} className={styles.areaButton}>
                    
                    <textarea className={styles.Area}
                        placeholder='Qual tarefa pretente realizar?'
                        name='tarefa'
                        value={novaTarefa}
                        onChange={usuarioEscreverNovaTarefa}
                        onInvalid={usuarioTarefaInvalida}
                        onKeyDown={usuarioEnter}
                        required
                    />

                    <button type='submit' disabled={novaTarefaVazia}>
                        Adicionar
                    </button>
                </form>

            </div> 

            <div className={styles.containerTarefas}>
              
              <div className={styles.boxTarefasRealizar}>

                    <div className={styles.tituloRealizadas}>
                        <p>Tarefas a realizar</p>
                    </div>

                    <div className={styles.tarefasRealizar}>
                        
                        
                            
                        {tarefas.map(mostrarTarefas => (
                           
                                <div className={styles.keyTarefas} key={mostrarTarefas}>
                                    
                                    <Tarefas 
                                        todasTarefas={mostrarTarefas} 
                                        deletandoTarefas={deletarTarefa}
                                    />
                                    
                                    <button 
                                        className={styles.buttonTarefa}
                                        onClick={(event) => usuarioTarefaConcluida(event, mostrarTarefas)}>
                                        Concluir
                                    </button>
                                </div>
                           
                        ))}
                                
                    </div>

                    <div className={styles.boxTarefasCont}>
                        <div className={styles.tarefasCont}>
                            <p>Tarefas Para Realizar: {contarTarefasRealizar()}</p>
                        </div>
                    </div>  
                </div>

                <div className={styles.boxTarefasConcluida}>

                        <div className={styles.tituloConcluidas}>
                            <p>Tarefas concluidas</p>
                        </div>

                    <div className={styles.tarefasConcluida}>
                        
                        

                        {tarefasConcluidas.map(concluidas =>(
                        <div className={styles.keyTarefasConcluidas} key={concluidas}>
                            <Tarefas 
                                todasTarefas={concluidas} 
                                deletandoTarefas={deletarTarefaConluidas}
                            />
                        </div>
                        ))}

                         
                    </div>
                    <div className={styles.boxTarefasCont}>

                        <div className={styles.tarefasCont}>
                            
                            {contarTarefasRealizar() > 0 ? 
                            ( 
                                <p>Total de Tarefas Concluídas: {contarTarefasConcluidas()} de {TotalTarefas()} </p> 
                            ) 
                            : contarTarefasRealizar() === 0 && contarTarefasConcluidas() === 0 ?(
                                <p>Nenhuma tarefa para concluir</p> 
                            ) 
                            : contarTarefasRealizar() === 0 ? (
                                <p>Todas as tarefas foram concluídas</p> 
                            ) 
                            : null  
                            }

                        </div>

                    </div>
                </div>

            </div>
        </div>    
       
    ) 

}