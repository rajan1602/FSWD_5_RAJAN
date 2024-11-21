// import React from 'react'
// import MovieList from './MovieList';

// const App = () => {
//   return (
//     <div>
//       <h1 style={{
//         backgroundcolor:'black',
//         color:'white',
//         fontsize:'30px',
//         textalign:'center',
//         }}>Netflix Clone App</h1>
//         <MovieList/>
//     </div>
//   );
// };

// export default App;

import MovieList from "./MovieList";
const App = () => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Netflix Clone App
      </h1>
      <MovieList />
    </div>
  );
};

export default App;
