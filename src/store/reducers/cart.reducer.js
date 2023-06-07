import { CART } from '../../data/cart';

const initialState = {
	items: [],
	total: 0,
};

const sumTotal = (list) => {
	list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);
};

const CartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REMOVE_ITEM':
			const cleanCart = [...state.items].filter((item) => item.id !== action.itemId);
			return { ...state, items: cleanCart, total: sumTotal(cleanCart) };
		case 'ADD_ITEM':
			const indexItem = state.items.findIndex((item) => item.id === action.item.id);
			if (indexItem === -1) {
				const item = { ...action.item, quantity: 1 };
				const updateCart = [...state.items, item];
				console.log(updateCart);
				return { ...state, items: updateCart, total: sumTotal(updateCart) };
			}
			const items = [...state.items].map((item) => {
				if (item.id === action.item.id) item.quantity++;
				return item;
			});
			return { ...state, items, total: sumTotal(items) };
		default:
			return state;
	}
};
export default CartReducer;
