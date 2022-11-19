import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home/Home";
import { EditStudent } from "./components/EditStudent/EditStudent";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/student/add" />}
          ></Route>
          <Route exact path="/student/add" element={<Home />}></Route>
          <Route
            exact
            path="/student/edit/:id"
            element={<EditStudent />}
          ></Route>
          <Route exact path="/redirect" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="/redirect" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
