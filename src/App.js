import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Categories from "./pages/categories";
import Services from "./pages/services";

import Footer from "./components/footer";
import Header from "./components/header";
import useApi from "./hooks/useApi";
import { SET_CATEGORIES } from "./redux/reducers/categoriesReducer";

function App(props) {
  console.log(">> APP PROPS", props);

  const api = useApi();

  if (props.categoriesState.initialized === false) {
    api
      .get(
        "https://api.adoptez1artisan.com/public/categories/listMainCategories"
      )
      .then((response) => {
        console.log(">> KATEGORI LISTESI CEVAP", response);

        const action = {
          type: SET_CATEGORIES,
          payload: {
            categories: response.data.data,
          },
        };

        props.dispatch(action);
      })
      .catch((err) => {
        console.error(">> KATEGORI LISTESI HATASI", err);
      });
  }

  return (
    <div className="container py-3">
      <Header />

      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="categories" element={<Categories />} />
          <Route path="category/:slug" element={<Categories />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);
