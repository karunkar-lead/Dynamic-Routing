import React from 'react'
import "./App.css"
import { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Products from './components/Products'
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'
import Shop from './components/Shop'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserContext'
import Dashboard from './components/Dashboard'
import Child from './Child'

const App = () => {
  // localStorage.setItem("Name", "John Doe");
  // localStorage.setItem("Email", "vW2Kt@example.com");
  // const user = localStorage.getItem("Name");
  // localStorage.removeItem("Email");
  // localStorage.clear();

  // const user = {
  //   "name": "cherry charan",
  //   "age": 20,
  //   "email": "vW2Kt@example.com",
  //   "password": "1234"
  // }
  // localStorage.setItem("user", JSON.stringify(user));

  // const user1 = JSON.parse(localStorage.getItem("user"));
  // console.log(user1);

  const [name, setName] = useState("John Doe");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // const slowCalculation = (num) => {
  //   console.log("Heavy Calculation running...");
  //   for (let i = 0; i < 1000000000; i++) {}
  //   console.log("Calculated");
  //   return num +1;
  // };

  // const result = slowCalculation(number);

  // const result = useMemo(() => {
  //   return slowCalculation(number);
  // }, [number]);

  console.log("Re-render!");

  // useEffect(() => {
  //   console.log("Re-render!");
  // }, [count]);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  },[]);

  const [isAuth, setIsAuth] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      )
    },
    {
      path: "/products",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ProtectedRoute isAuth={isAuth}>
            <Products />
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: "/products/:id",
      element: <ProductDetail />
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      )
    },
    {
      path: "/shop",
      element: <Shop />,
      children: [
        {
          path: "men",
          element: <Men />
        },
        {
          path: "women",
          element: <Women />
        },
        {
          path: "kids",
          element: <Kids />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    },
    {
      path: "/login",
      element: <Login isAuth={isAuth} setIsAuth={setIsAuth} />
    }
  ])
  return (
    <>
      {/* <div>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>

        <h2>Result : {result}</h2>
        <button onClick={() => setNumber(number + 1)}>Change Number</button>
      </div> */}
      {/* <div>
        <h2>Count {count}</h2>
        <div>
          <button onClick={increaseCount}>Increase + 1</button>
        </div>
        // <Child count={count} />
        <Child increaseCount={increaseCount} />
      </div> */}
      <RouterProvider router={router} />
    </>

    // <UserContext.Provider value={{name,count,increaseCount}}>
    //   <Dashboard />
    // </UserContext.Provider>
  )
}

export default App