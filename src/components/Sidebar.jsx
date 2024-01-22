import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {

    return (

        <aside className={styles.sidebar}>

            <img className={styles.cover} 
                src='https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <div className={styles.profile}>
                
                <Avatar src='https://scontent.fumu2-1.fna.fbcdn.net/v/t39.30808-6/275925839_5061297720624911_314312777193945814_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4QlxNAsfU74AX_VM7he&_nc_oc=AQn0Z3buv7hxVEmjQjcqToYN6P4OGoeFfo0AAoFzpKm9NqsnFVYGxycuiX41FysA45O3Z70inqtdVx4YuWYZwa07&_nc_ht=scontent.fumu2-1.fna&oh=00_AfDE0ISzt_C0YzB80F6uuBlykV1vPmrUmj8WToD0GJxQeA&oe=65A5CC68'/>

                <strong>Gabriel Martins</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );


}