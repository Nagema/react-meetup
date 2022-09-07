import { Fragment } from 'react';
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import MeetupsProvider from './context/MeetupsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div data-test="app">
      <MeetupsProvider>
        <BrowserRouter>
          <Fragment>
            <MainNavigation />
            <Routes>
              <Route 
                path='/' 
                element={
                  <Layout>
                    <AllMeetupsPage/>
                  </Layout>
                }>
              </Route>
              <Route 
                path='/new-meetup' 
                element={
                  <Layout>
                    <NewMeetupsPage />
                  </Layout>
                  }>
              </Route>
              <Route 
                path='/favorites' 
                element={
                  <Layout>
                    <FavoritesPage />
                  </Layout>
                  }>
              </Route>
            </Routes>
          </Fragment>
        </BrowserRouter>
      </MeetupsProvider>
    </div>
  );
}

export default App;
