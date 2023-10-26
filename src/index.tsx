import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import CounterPage from './pages/CounterPage';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import ClassComponentSample from './pages/ClassComponentSample';
// import { BrowserRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    // kendi componentimize dışarıdan bir attribute değeri gönderebildik
    <>
        {/* <App title='App-1' />
        <App title='App-2' body='App2 Body' /> */}
        {/* <CounterPage /> */}

        {/* uygulama içerisinde Browser Route tag içerisinde kalan tüm componentler clientside routing işlemine tabi olucaklar */}
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<>
                <header style={{padding:"10px"}}>
                  <Link to="/counter-page">Counter Page Sample</Link>
                  {' '} 
                  {/* aralarına boşluk bıraktık */}
                  <Link to="/about">About Page</Link>
                  {' '}
                  <Link to="/todo-page">Todo Page</Link>
                  {' '}
                  <Link to="/class-component">Class Component</Link>
                  {' '}
                  <a href='https://www.google.com'>Google</a>
                </header>
                <main style={{padding:"10px"}}>
                  {/* component içeriklerinin değiştiği kısım */}
                  <Outlet /> 
                </main>
                <footer style={{padding:"10px"}}>
                  {/* <ClassComponentSample name="deneme1"  /> */}
                  Alt Bilgi
                </footer></>
            }>
                <Route path='/counter-page' Component={CounterPage}></Route>
                <Route path='/about' element={<>About Page</>}></Route>
                <Route path='/todo-page' Component={TodoPage}></Route>
                <Route path='/class-component' Component={ClassComponentSample}></Route>
              </Route>
              <Route path='/admin' element={<Outlet />}>
                <Route path='users' element={<>Admin Users</>}></Route>
                <Route path='roles' element={<>Admin Roles</>}></Route>
              </Route>
          </Routes>
        </BrowserRouter>

    </>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
