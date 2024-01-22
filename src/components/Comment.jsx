import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ todosComentarios, deletandoComentario }) {

    const [ likeCount, setLikeCount] = useState(0);
    
    
    
    function usuarioDeletarComentario() {

        deletandoComentario(todosComentarios);
    };


    function usuarioLike() {

        setLikeCount((likes) => {
            return likes + 1
        })
    };

    return (
        
        <div className={styles.comment}>
            
            <Avatar hasBorder={false} src='https://scontent.fumu2-1.fna.fbcdn.net/v/t39.30808-6/275925839_5061297720624911_314312777193945814_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4QlxNAsfU74AX_VM7he&_nc_oc=AQn0Z3buv7hxVEmjQjcqToYN6P4OGoeFfo0AAoFzpKm9NqsnFVYGxycuiX41FysA45O3Z70inqtdVx4YuWYZwa07&_nc_ht=scontent.fumu2-1.fna&oh=00_AfDE0ISzt_C0YzB80F6uuBlykV1vPmrUmj8WToD0GJxQeA&oe=65A5CC68'/>
        
            <div className={styles.commentBox}>
               
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Martins</strong>
                            <time title='11 de Janeiro 16:20' dateTime='2023-01-11 16:19'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={usuarioDeletarComentario} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{todosComentarios}</p>

                </div>
                
                <footer>
                    <button onClick={usuarioLike}>

                        <ThumbsUp/>
                        Aplaudir
                        <span> 
                            {likeCount}
                        </span>
                        
                    </button>
                </footer>
            </div>

        </div>
    )
}