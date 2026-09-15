import { useAppContext } from '../context/AppContext';

export default function Post({ post }) {
  const { dispatch } = useAppContext();
  const remove = () => { if (window.confirm('Delete this post? This action cannot be undone.')) dispatch({ type: 'DELETE_POST', payload: post.id }); };
  return <article className="post-card content-card post-enter"><div className="post-header"><div className="small-avatar">{post.username.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()}</div><div className="post-author"><strong>{post.username}</strong><time>{post.timestamp}</time></div><button className="delete-button" onClick={remove} type="button">Delete</button></div><p className="post-content">{post.content}</p><div className="post-footer"><button className={post.liked ? 'like-button liked' : 'like-button'} onClick={() => dispatch({ type: 'TOGGLE_LIKE', payload: post.id })} type="button"><span>{post.liked ? '♥' : '♡'}</span> {post.liked ? 'Liked' : 'Like'} <b>{post.likes}</b></button><span className="post-category">ACADEMIC COMMUNITY</span></div></article>;
}
