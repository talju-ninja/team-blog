import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import NewPostPage from './pages/NewPostPage';

ReactDOM.render(<NewPostPage />, document.getElementById(
  'root',
) as HTMLElement);
=======
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
>>>>>>> a29ee9e604804d931948133578dbce27a63b76c6
