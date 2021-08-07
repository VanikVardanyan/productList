import { GET_PRODUCTS, CHANGE_PRICE, LOADING } from "../../actionTypes";

const initialSate = {
  loading: false,
  products: [],
  links: [],
  correctlyData: {},
};

export const productsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      const products = action.data.filter((elem) => elem.rid);
      const normilizeProducts = products.reduce((accum, elem) => {
        const goods = elem.goods.map((item) => {
          return { ...item, quantity: 1, sum: item.quantity || 1 * item.gprice };
        });

        const totalAmount = goods.reduce((num, item) => num + +item.gprice * item.quantity, 0);
        accum.push({ ...elem, goods, total: totalAmount });
        return accum;
      }, []);
      const links = normilizeProducts.map(({ rid, rname }) => ({ id: rid, name: rname }));
      return { ...state, products: normilizeProducts, links };
    }
    case CHANGE_PRICE: {
      const { id, quantity } = action;
      const productChanges = state.products.reduce((accum, elem) => {
        const goods = elem.goods.map((elem) =>
          id === elem.gid ? { ...elem, quantity, sum: quantity * elem.gprice } : { ...elem },
        );
        const totalAmount = goods.reduce((num, item) => num + +item.gprice * item.quantity, 0);
        accum.push({ ...elem, goods, total: totalAmount });
        return accum;
      }, []);
      return { ...state, products: productChanges };
    }
    case LOADING: {
      return { ...state, loading: action.loading };
    }
    default:
      return state;
  }
};
