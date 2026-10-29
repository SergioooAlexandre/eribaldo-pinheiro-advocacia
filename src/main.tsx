import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ClientUpdate from './ClientUpdate';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClientUpdate />
  </StrictMode>,
);
