// // import React from 'react'
// // // import CounterApp from './components/CounterApp'
// // import ImageApp from './components/ImageApp'
// // import {BrowserRouter,Routes,Route} from "react-router-dom"
// // import MainLayout from './components/MainLayout'
// // import CounterApp from './components/CounterApp'

// // const App = () => {
// //   return (
// //     <div>
// //       <BrowserRouter>
// //       <Routes>
// //       <Route path="/" element={<MainLayout/>}>
// //       <Route path='/counterapp' element={<CounterApp/>}/>
// //       <Route path='/imageapp' element={<ImageApp/>}/>
// //       </Routes>
// //       </BrowserRouter>
// //       {/* <CounterApp/> */}
// //       {/* <ImageApp/> */}
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react';
// import ImageApp from './components/ImageApp';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from './components/MainLayout';
// import CounterApp from './components/CounterApp';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<MainLayout />}>
//             <Route path="counterapp" element={<CounterApp />} />
//             <Route path="imageapp" element={<ImageApp />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import CounterApp from "./components/CounterApp";
import ImageApp from "./components/ImageApp";
import MainLayout from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/counterapp" element={<CounterApp />} />
            <Route path="/imageapp" element={<ImageApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;