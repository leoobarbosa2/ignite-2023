import { format, formatDistanceToNow } from 'date-fns'; 
import { ptBR } from 'date-fns/locale';
import { Comment } from '../index';
import * as styles from './Post.module.css';
import { Avatar } from '@Components/index';
import { useState } from 'react';

export const Post = ({ 
    author,
    content,
    publishedAt
 }) => {
    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState(['Post maneiro']);

    const formattedPublishedDate = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e) {
        e.preventDefault();

        setComments([...comments, newCommentText])

        setNewCommentText('');
    }

    function deleteComment(comment) {
        const updatedCommentList = comments.filter(item => item !== comment);

        setComments(newCommentList)
    }

    function handleNewInvalidComment() {
        console.log(event.target.setCustomValidity('Esse campo é obrigatório'))
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={formattedPublishedDate} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph') {
                        return (
                            <p key={item.content}>{item.content}</p>
                        )
                    } else if(item.type === 'link') {
                        return (
                            <p key={item.content}>
                                <a>{item.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={e => handleCreateNewComment(e)} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    required
                    onChange={e => {
                        e.target.setCustomValidity('')
                        setNewCommentText(e.target.value)
                    }} 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onInvalid={handleNewInvalidComment}
                />

            <footer>
                <button 
                disabled={isNewCommentEmpty} 
                type='submit'>
                    Publicar
                </button>
            </footer>
            </form>

        <div className={styles.commentList}> 
            {comments.map(comment => {
                return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                )
            })}
        </div>
             
        </article>
    )
}