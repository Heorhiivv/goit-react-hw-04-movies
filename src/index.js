import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';


ReactDOM.render(

<BrowserRouter>
<Suspense fallback={ <div>Loading...</div> }>
    <App />
    </Suspense>
</BrowserRouter>,

  document.getElementById('root')
);
