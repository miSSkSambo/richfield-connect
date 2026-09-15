import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Profile() {
  const { state } = useAppContext();
  const user = state.user;
  if (!user) return <div className="container empty-state page-enter"><div className="empty-icon">RC</div><h1>Your profile is waiting.</h1><p>Register to create your academic profile and introduce yourself to the community.</p><Link to="/signup" className="button button-primary">Register now <span>→</span></Link></div>;
  const initials = user.fullName.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  const stats = [['Posts', state.posts.filter((post) => post.username === user.fullName).length], ['Connections', 0], ['Groups', 0]];
  return <div className="container page-enter"><section className="profile-banner"><div className="profile-avatar-large">{initials}</div><div><div className="eyebrow light-eyebrow">STUDENT PROFILE</div><h1>{user.fullName}</h1><p>{user.campus} · Richfield Connect member</p></div><Link to="/feed" className="button button-light profile-action">Go to community feed <span>→</span></Link></section><section className="profile-content"><div className="profile-details content-card"><div className="eyebrow">ABOUT ME</div><h2>{user.fullName}</h2><p className="profile-bio">{user.bio}</p><div className="detail-list"><div><span>Student number</span><strong>{user.studentNumber}</strong></div><div><span>Email address</span><strong>{user.email}</strong></div><div><span>Registered campus</span><strong>{user.campus}</strong></div></div><div className="eyebrow interests-heading">INTERESTS</div><div className="tag-list">{user.interests.map((interest) => <span className="tag" key={interest}>{interest}</span>)}</div></div><aside className="profile-stats"><div className="eyebrow">COMMUNITY SNAPSHOT</div>{stats.map(([label, value]) => <div className="stat-row" key={label}><strong>{value}</strong><span>{label}</span></div>)}<Link to="/signup" className="text-link">Update your profile →</Link></aside></section></div>;
}
