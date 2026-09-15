import { createContext, useContext, useEffect, useReducer } from 'react';

const AppContext = createContext(null);
const USER_KEY = 'richfield-connect-user';
const POSTS_KEY = 'richfield-connect-posts';

function loadJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

const initialState = {
  user: loadJson(USER_KEY, null),
  posts: loadJson(POSTS_KEY, []),
};

function reducer(state, action) {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, user: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] };
    case 'TOGGLE_LIKE':
      return {
        ...state,
        posts: state.posts.map((post) => post.id === action.payload
          ? { ...post, liked: !post.liked, likes: post.liked ? Math.max(0, post.likes - 1) : post.likes + 1 }
          : post),
      };
    case 'DELETE_POST':
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // State is hydrated from localStorage above and synchronized after every change.
  useEffect(() => {
    if (state.user) localStorage.setItem(USER_KEY, JSON.stringify(state.user));
    else localStorage.removeItem(USER_KEY);
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem(POSTS_KEY, JSON.stringify(state.posts));
  }, [state.posts]);

  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used inside AppProvider');
  return context;
}
