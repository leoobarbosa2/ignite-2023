import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '@Components/index';
import * as styles from './Comment.module.css';

export const Comment = ({ content, onDeleteComment }) => {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/54908803?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Barbosa</strong>
                            <time title='12 de Março as 20:13' dateTime='2023-12-04'>Publicado há 1H</time>
                        </div>
                        <button
                            onClick={handleDeleteComment} 
                            title='Deletar comentário'>
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
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