
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import NewRouteComponent from './NewRouteComponent';
import { useEffect } from "react";
import { useNavigationType, useLocation} from "react-router-dom";
import Option1 from "./pages/Option1";
import CollegeLogin from "./pages/CollegeLogin";
import StudentLogin from "./pages/StudentLogin";
import AdministraterLogin from "./pages/AdministraterLogin";

//hello



// function MyComponent() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/new-route');
//   };

//   return (
//     <button onClick={handleClick}>Navigate to New Route</button>
//   );
// }
// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Option1/>} />
//         {/* <Route path="/administrater-login" element={<AdministraterLogin/>} />
//         <Route path="/student-login" element={<StudentLogin/>} />
//         <Route path="/college-login" element={<CollegeLogin/>} /> */}

//         {/* ... other routes */}
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/college-login":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/student-login":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/administrater-login":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Option1 />} />
      <Route path="/college-login" element={<CollegeLogin />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/administrater-login" element={<AdministraterLogin />} />
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;

