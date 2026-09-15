# Richfield Connect

**Assignment title:** Richfield Connect — React Single-Page Academic Social Engagement Platform

## Description

Richfield Connect is a browser-only React Single-Page Application for Richfield students. The platform supports local profile registration, live profile previews, dynamic profiles, an academic community feed, post creation, likes, post deletion, client-side routing, responsive design, and browser `localStorage` persistence.

The application uses React 18+, Vite, React Router v6, the Context API, `useReducer`, `useState`, and `useEffect`. It does not use a backend, database, Redux, Zustand, MobX, jQuery, or direct DOM manipulation.

## Component architecture

`App` wraps the application in `AppProvider` and defines all routes. `Navbar` and `Footer` persist across views. The Home and About views provide the landing and informational content. `SignUpForm` owns controlled registration state and validation and passes that same state to `ProfilePreview` through props. `Profile` reads all displayed profile values from Context/localStorage. `Feed` renders `CreatePost` and individual `Post` components. `AppContext` uses a reducer with `REGISTER_USER`, `ADD_POST`, `TOGGLE_LIKE`, and `DELETE_POST` actions.

## Folder structure

```text
RichfieldConnect/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── context/AppContext.jsx
    ├── components/
    │   ├── CreatePost.jsx
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── Post.jsx
    │   └── ProfilePreview.jsx
    ├── views/
    │   ├── About.jsx
    │   ├── Feed.jsx
    │   ├── Home.jsx
    │   ├── Profile.jsx
    │   └── SignUpForm.jsx
    └── styles/global.css
```

## Run locally in Visual Studio or Visual Studio Code

1. Install Node.js 18 or newer from [nodejs.org](https://nodejs.org/).
2. Extract the project ZIP and open the extracted `RichfieldConnect` folder.
3. Open a terminal in that folder.
4. Install dependencies:

```bash
npm install
```

5. Start the Vite development server:

```bash
npm run dev
```

6. Open the local URL printed by Vite, normally `http://localhost:5173`.
7. To create a production build, run:

```bash
npm run build
```

Do not submit `node_modules`; the marker should run `npm install` after extracting the project.

## Functional demonstration checklist

Open `/signup` and test the controlled fields. Blur invalid fields to see inline validation. Student number accepts numeric characters only, email and password rules are enforced, at least one interest is required, the bio must contain at least 20 characters, and terms must be accepted. The preview updates as the same form state changes.

After registration, open `/profile` to see the dynamic profile. Open `/feed`, create a post, toggle its like state, refresh the browser to verify persistence, and delete it using the confirmation dialog. Use the navigation links to confirm that React Router changes views without a full-page reload.

## External resources and references

The implementation was guided by the following official documentation pages, consulted for API behaviour and syntax:

- React documentation, “Using the State Hook”: https://react.dev/reference/react/useState
- React documentation, “useReducer”: https://react.dev/reference/react/useReducer
- React documentation, “useContext”: https://react.dev/reference/react/useContext
- React documentation, “useEffect”: https://react.dev/reference/react/useEffect
- React Router documentation, “Link”: https://reactrouter.com/en/main/components/link
- React Router documentation, “Routes”: https://reactrouter.com/en/main/components/routes
- Vite documentation, “Getting Started”: https://vitejs.dev/guide/
- MDN Web Docs, “Window: localStorage property”: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

