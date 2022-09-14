import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import First from './components/First/First';
import FormOut from './components/ui/FormOut/FormOut';
import Fourth from './components/Fourth/Fourth';
import PersonalPage from './components/PersonalPage/PersonalPage';
import PersonalOwner from './components/PersonalOwner/PersonalOwner';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import { checkAuth } from './redux/actions/userAction';
import Calendar from './components/PersonalOwner/Calendar/Calendar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const user = useSelector((state) => state.user);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <First />
              <Second />
              <Third />
              <Fourth />
            </>
          )}
        />
        {user?.type === 'artist' && (
          <Route path="/personalPage" element={<PersonalPage />} />
        )}

        {user?.type === 'owner' && (
          <Route path="/personalPage" element={<PersonalOwner />} />
        )}
        {user && (
          <Route path="/logout" element={<FormOut />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
