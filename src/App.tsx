import { createContext, useState } from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import "./App.scss";
import Layout from "./blocks/layout/Layout";
import Discover from "./pages/Discover";



export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: ()=> {}
})

export const ThemeProvider = ({children}: any) => {

  const [isDark, setDarkTheme] = useState(true);
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(isDark? "theme-dark": "theme-light")

  const toggleTheme = (): void => {
    setDarkTheme(!isDark);
  }

  return <ThemeContext.Provider value={{isDark, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}

export const SearchContext = createContext({
  query: '',
  setSearchQuery: (query:string)=> {}
});

export const SearchQueryProvider = ({children}: any) => {

  const [query, setQuery] = useState('');
  const setSearchQuery = (query: string): void => {
    setQuery(query);
  }

  return <SearchContext.Provider value={{query, setSearchQuery}}>
    {children}
  </SearchContext.Provider>
}



function App() {

  return (
    <Layout>
       <Switch>
        <Route path='/discover' exact>
          <Discover />
        </Route>
        <Route path='/discover/search/:id' exact>
          <Discover />
        </Route>
        <Route path='/'>
          <Redirect to='/discover' />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
