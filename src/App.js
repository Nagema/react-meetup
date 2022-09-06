import { Fragment } from 'react';
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div data-test="app">
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
            <Route path='/new-meetup' element={<NewMeetupsPage />}></Route>
            <Route path='/favorites' element={<FavoritesPage />}></Route>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
