import First from "./components/first/first";
// import img1 from './assets/one.jpeg'
import UserInteractionDemo from "./components/user-interaction-demo/UserInteractionDemo";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Rootlayout from "./components/routing/Rootlayout";
import Home from './components/routing/Home'
import Register from '././components/routing/Register'
import Login from "./components/routing/Login";
// import Technologies from './components/routing/Technologies'
import { lazy,Suspense } from "react";
const Technologies=lazy(()=>import("./components/routing/Technologies"))

import UserProfile from "./components/routing/UserProfile";
import Vue from './components/routing/Vue'
import Java from './components/routing/Java'
import Node from './components/routing/Node'
import RoutingError from "./components/RoutingError";

// / import './App.css';
// import Managetask from "./components/Tasks/Managetask";
// import StateChangeDemo from './components/user-interaction-demo/StateChangeDemo'
// import A from './components/first/A';
// import Products from './components/products/Products'
// import img1 from './assets/one.jpeg'
// import { FcBusinessman } from "react-icons/fc";
// import svgimg from './assets/thhree.svg.svg'
// import EffectDemo from "./components/sideeffects/EffectDemo";
// import Posts from "./components/sideeffects/Posts";
// import Test1 from "./components/childparent/test1";

// import Formdemo from "./components/Formdemo";
// import Managetask from "./components/lifting/Managetask";
// import Formdemo from "./components/formdemo";
function App(){
  //business logic
//   //result react element
  const browserRouterObject=createBrowserRouter(
    [
      {
        path:"",
        element:<Rootlayout/>,
        errorElement:<RoutingError/>,
        children:[
          {
            path:'',
            element:<Home/>
          },
          {
            path:'register',
            element:<Register/>
          },
          {path:'login',
            element:<Login/>
          }
          ,
          
          {
            path:"user-profile/:username",
            element:<UserProfile/>
          },{
            path:'technologies',
            element:(<Suspense> <Technologies/> </Suspense>),
            children:[
              {
                path:'java',
                element:<Java/>,    
              },
              {
                path:'node',
                element:<Node/>,
              },
              {
                path:'vue',
                element:<Vue/>,
              }
            ]
          },
        ]
      }
    ]
  )
  return <RouterProvider router={browserRouterObject}/>;
}


export default App;

//   return  (
//     <div className="container text-center">
//       {/* <RootLayout/> */}

//       {/* <Managetask/> */}
//       {/* <Posts/> */}
//       {/* <Test1/> */}
// {/* <ManageTask/> */}
//       {/* <Managetask/> */}
//  {/* <Formdemo/> */}
//       {/* <EffectDemo/> */}
// {/* <StateChangeDemo/> */}
//       {/* <UserInteractionDemo/> */}
//       {/* <Products/> */}
//  {/* <A/> */}
//       {/* <img src={img1} width="100px" alt="" />
//       <img src={svgimg} width="100px" alt="" />
    
//     <h1>Welcome</h1>
//     <FcBusinessman className="icon" /> */}
//     {/*nest oFirst component */}
//     {/* <First/> */}
   
//     </div>
//   );
// }
//   export default App;
