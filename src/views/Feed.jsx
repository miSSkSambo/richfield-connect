import { Link } from 'react-router-dom';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { useAppContext } from '../context/AppContext';

export default function Feed() {
  const { state } = useAppContext();
  return <div className="container page-enter"><section className="feed-heading"><div><div className="eyebrow">RICHFIELD COMMUNITY FEED</div><h1>Ideas worth <span>sharing.</span></h1><p>Ask questions, share discoveries and learn from your peers.</p></div><div className="feed-count"><strong>{state.posts.length}</strong><span>community posts</span></div></section>{state.user ? <div className="feed-layout"><div className="feed-main"><CreatePost />{state.posts.length ? state.posts.map((post) => <Post key={post.id} post={post} />) : <div className="feed-empty"><h2>The conversation starts here.</h2><p>Be the first to share an idea with the community.</p></div>}</div><aside className="feed-aside"><div className="aside-card"><div className="eyebrow">YOUR COMMUNITY</div><h3>Keep it thoughtful.</h3><p>Richfield Connect is a space for useful ideas, constructive questions and peer learning.</p><Link to="/about" className="text-link">Read guidelines →</Link></div><div className="aside-card accent-aside"><span className="aside-symbol">✦</span><h3>Your voice matters.</h3><p>Every question can help someone else learn.</p></div></aside></div> : <div className="empty-state content-card"><div className="empty-icon">RC</div><h2>Join the conversation.</h2><p>Register a profile to create posts, like ideas and take part in the Richfield community.</p><Link to="/signup" className="button button-primary">Create your profile <span>→</span></Link></div>}</div>;
}
