import styles from './Post.module.css';	

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

    const [comentarios, setComentarios] = useState([
        'Post muito bacana!'
    ])
    
    const [novoComentario, setNovoComentario] = useState('');

    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    
    function usuarioCriarNovoComentario() {
        //continuar na mesma pagina
        event.preventDefault();
        
        setComentarios([...comentarios, novoComentario]);
        setNovoComentario('');

    }

    function usuarioNovoComentarioEnviado() {
        event.target.setCustomValidity('');
        setNovoComentario(event.target.value);
    }

    function usuarioComentarioInvalido() {
       
        event.target.setCustomValidity('Este Campo é Obrigatorio');
        setNovoComentario(event.target.value);

    }

    function deletarComentario(listaComentarios) {

        const novaListaComentarios =  comentarios.filter( comentario => {
            return comentario != listaComentarios;
        })

        setComentarios(novaListaComentarios);

    }

    const novoComentarioVazio = novoComentario.length === 0;


    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    
                    <Avatar src={author.avatarUrl}/>
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
                   
            </header>

            <div className={styles.content}>
                
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                 })}
                    
            </div>

            <form onSubmit={usuarioCriarNovoComentario} className={styles.commentForm}>
                
                <strong> Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                    name='comentar' 
                    value={novoComentario}
                    onChange={usuarioNovoComentarioEnviado} 
                    onInvalid={usuarioComentarioInvalido}
                    required
                />

                <footer>
                    <button type='submit' disabled={novoComentarioVazio}>
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>
                
                {comentarios.map(mostrarComentarios =>{
                    
                  return (

                        <Comment 
                            key={mostrarComentarios}
                            todosComentarios={mostrarComentarios}
                            deletandoComentario={deletarComentario}
                        /> 
                  )
                })}

            </div>
        </article>
    );
    
    
}