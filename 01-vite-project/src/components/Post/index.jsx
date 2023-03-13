import { Comment } from '../index';
import * as styles from './Post.module.css';
import { Avatar } from '@Components/index';

export const Post = () => {
    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/54908803?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Leonardo Barbosa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='12 de Março as 20:13' dateTime='2023-12-04'>Publicado há 1H</time>
            </header>

            <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt saepe. </p>
                    <p><a href='https://github.com/leoobarbosa2'>github/leoobarbosa2</a></p>
                    <p>Veniam adipisci aspernatur numquam atque cupiditate doloribus ipsa optio error necessitatibus</p> 
                    <p>itaque rem, ex, iure earum consequatur possimus quia!</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'/>

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
            </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
             
        </article>
    )
}