import { ThumbsUp, Trash } from 'phosphor-react';
import * as styles from './Comment.module.css';

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/54908803?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Barbosa</strong>
                            <time title='12 de Março as 20:13' dateTime='2023-12-04'>Publicado há 1H</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>Muito bom, amigo, parabéns!! </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}