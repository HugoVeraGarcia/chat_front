// 1. crear la propiedad en el objeto actions
// 2. creamos el case en el reducer con la propiedad que creamos en el paso 1
// 3. crear la función en el archivo actions
// 4. despachar en el componente la función creada en el paso 3

import axios from "axios";

export const actions = {
  setEnterprise: "SET_ENTERPRISE",
};

const getConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const addEnterpriseThunk = (enterprise) => {
  return (dispatch) => {
    return axios
      .post(
        "http://3.89.23.42:5000/api/v1/usersEnterprise/enterprise",
        enterprise
      )
  };
};

export const addUserThunk = (user) => {
  return (dispatch) => {
    return axios
      .post(
        "http://3.89.23.42:5000/api/v1/usersEnterprise",
        user, getConfig()
      )
  };
};

export const loginThunk = (credentials) => {
  return (dispatch) => {
    //console.log("hello desde trunk");
    return axios
      .post(
        "http://3.89.23.42:5000/api/v1/usersEnterprise/login",
        credentials
      )
      
  };
};



// export const setEnterprise = (enterprise) => ({
//   type: actions.setEnterprise,
//   payload: enterprise,
// });

// export const setCart = (cart) => ({
//   type: actions.setCart,
//   payload: cart,
// });

// export const setProducts = (products) => ({
//   type: actions.setProducts,
//   payload: products,
// });

// export const setFilterProducts = (filter) => {
//   //console.log('desde actions')
//   return {
//     type: actions.setFilterProducts,
//     payload: filter,
//   };
// };

// export const setCategories = (categories) => ({
//   type: actions.setCategories,
//   payload: categories,
// });

// export const setIsLoading = (isLoading) => ({
//   type: actions.setIsLoading,
//   payload: isLoading,
// });

// export const getProductsThunk = () => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .get("https://ecommerce-api-react.herokuapp.com/api/v1/products/")
//       .then((res) => {
//         dispatch(setProducts(res.data.data.products));
//       })
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };

// export const getCategoriesThunk = () => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .get(
//         "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
//       )
//       .then((res) => {
//         dispatch(setCategories(res.data.data.categories));
//       })
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };

// export const filterCategoriesThunk = (id) => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .get(
//         `https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${id}`
//       )
//       .then((res) => {
//         dispatch(setProducts(res.data.data.products));
//       })
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };

// export const queryProductsThunk = (name) => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .get(
//         `https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${name}`
//       )
//       .then((res) => {
//         dispatch(setProducts(res.data.data.products));
//       })
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };



// export const addNewUserThunk = (user) => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .post(`https://ecommerce-api-react.herokuapp.com/api/v1/users`, user)
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };

// export const getUserCartThunk = () => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .get(
//         "https://ecommerce-api-react.herokuapp.com/api/v1/cart/",
//         getConfig()
//       )
//       .then((res) => dispatch(setCart(res.data.data.cart)))
//       .catch((error) => {
//         if (error.response.status === 404) {
//           dispatch(setCart([]));
//         }
//       })
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };

// export const deleteProductThunk = (id) => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .delete(
//         `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,
//         getConfig()
//       )
//       .then((res) => dispatch(getUserCartThunk()))
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };

// export const purchaseCartThunk = () => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .post(
//         `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`,
//         {},
//         getConfig()
//       )
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };

// export const getPurchasesThunk = () => {
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//     return axios
//       .get(
//         "https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
//         getConfig()
//       )
//       .then((res) => {
//         dispatch(setPurchases(res.data.data.purchases));
//       })
//       .catch((error) => {
//         if (error.response.status === 404) {
//           dispatch(setPurchases([]));
//         }
//       })
//       .finally(() => dispatch(setIsLoading(false)));
//   };
// };
