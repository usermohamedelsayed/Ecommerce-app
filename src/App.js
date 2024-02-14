import { Footer, Header } from "./component";
import { Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./index.scss";
import {
  Blogs,
  Cart,
  CompareProducts,
  Contact,
  Favourite,
  Home,
  OurStore,
  SingleBlog,
  SingleProduct,
  Account,
  SearchPage,
} from "./pages";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ourStore",
          element: <OurStore />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/singleBlog/:id",
          element: <SingleBlog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/favourite",
          element: <Favourite />,
        },
        {
          path: "/compareProducts",
          element: <CompareProducts />,
        },
        {
          path: "/search/",
          element: <SearchPage />,
        },
        {
          path: "/search/:valueInput",
          element: <SearchPage />,
        },
        {
          path: "/login",
          element: <Account title={"login"} />,
        },
        {
          path: "/signin",
          element: <Account singIn={true} title={"create account"} />,
        },
      ],
    },
  ]);
  return RouterProvider({ router });
};
export default App;
