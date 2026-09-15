import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { state, dispatch } = useAppContext();
  const submit = (event) => {
    event.preventDefault();
    if (!state.user) { setError('Please register a profile before posting.'); return; }
    if (!content.trim()) { setError('Write something before posting.'); return; }
    dispatch({ type: 'ADD_POST', payload: { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), username: state.user.fullName, timestamp: new Date().toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short' }), content: content.trim(), likes: 0, liked: false } });
    setContent(''); setError('');
  };
  return <form className="create-post content-card" onSubmit={submit}><div className="post-form-top"><div className="small-avatar">{state.user ? state.user.fullName.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() : 'RC'}</div><div><strong>{state.user ? `Share with the community, ${state.user.fullName.split(' ')[0]}` : 'Join the conversation'}</strong><p>What are you learning or thinking about?</p></div></div><textarea value={content} onChange={(e) => { setContent(e.target.value); if (e.target.value.trim()) setError(''); }} placeholder="Share an idea, question or academic insight..." rows="4" aria-label="Create a post" />{error && <small className="error-message">{error}</small>}<div className="post-form-actions"><span>{content.length} characters</span><button className="button button-primary" type="submit">Post to feed <span>→</span></button></div></form>;
}
