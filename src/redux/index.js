import { configureStore } from "@reduxjs/toolkit";
import sliceProducts from "./sliceProducts";
import sliceCategories from "./sliceCategories";
import sliceProductsByCat from "./sliceProductsByCat";
import sliceCart from "./sliceCart";
import sliceFavourite from "./sliceFavourite";
import sliceCompareProducts from "./sliceCompareProducts";
import sliceSingleProduct from "./sliceSingleProduct";
import sliceSearch from "./sliceSearch";
export default configureStore({
  reducer: {
    sliceProducts,
    sliceCategories,
    sliceProductsByCat,
    sliceCart,
    sliceFavourite,
    sliceCompareProducts,
    sliceSingleProduct,
    sliceSearch,
  },
});
