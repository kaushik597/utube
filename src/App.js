import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/Watchpage';
function App() {
  // const appRouter= createBrowserRouter([{
  //   path:"/",
  //   element:<Body />,
  //   children:[{
  //     path:'/',
  //     element:<Maincontainer />
  //   },{
  //     path:'watch',
  //     element:<WatchPage />
  //   }
  // ]
  // }])

  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body />,
    children:[{
      path:'/',
      element:<Maincontainer />
    },
  {
    path:'watch',
    element:<WatchPage />
  }]
  }])
  return (
    <Provider store={store}>
    <div>
     <Header />
    <RouterProvider router={appRouter}></RouterProvider>
    
    </div>
    </Provider>
  );
}

export default App;
