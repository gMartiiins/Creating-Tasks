import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'


import styles from './App.module.css'

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://scontent.cdninstagram.com/v/t51.2885-19/330475471_863006324774239_1777648223399213346_n.jpg?stp=dst-jpg_s120x120&_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=EDlSMFOTk-8AX9VP-Ti&_nc_ht=scontent.cdninstagram.com&oh=00_AfDSJu04yFPSkWgWjksVw9ixR_a3BMcAmTix6eBe94qp_Q&oe=65A6C706',
      name: 'Gustavo Ilczszyn',
      role: 'Gamer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2024-01-13 09:00:00'),
  },

{
  id: 2,
  author: {
    avatarUrl: 'https://scontent.fumu2-1.fna.fbcdn.net/v/t39.30808-6/275925839_5061297720624911_314312777193945814_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=4QlxNAsfU74AX_VM7he&_nc_oc=AQn0Z3buv7hxVEmjQjcqToYN6P4OGoeFfo0AAoFzpKm9NqsnFVYGxycuiX41FysA45O3Z70inqtdVx4YuWYZwa07&_nc_ht=scontent.fumu2-1.fna&oh=00_AfDE0ISzt_C0YzB80F6uuBlykV1vPmrUmj8WToD0GJxQeA&oe=65A5CC68',
    name: 'Gabriel Martins',
    role: 'Aluno de Dev'
  },
  content: [
    {tipe: 'paragraph', content: 'Fala galeraa 👋'},
    {tipe: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {tipe: 'link', content:'jane.design/doctorcare'},

  ],
  publishedAt: new Date('2023-01-13 10:20:00'),
},
];

export function App() {

  return (
  <div>

    <Header/>

    <div className={styles.wrapper}>

      <Sidebar/>

      <main>
        {posts.map(post => {
          return (
            <Post 
            key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>

    </div>

  </div>
   
    
  )
}


 