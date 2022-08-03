export const calculateTotal = (newCartItems) => {
    let total = newCartItems.reduce((accunulator, item) => {
        return accunulator + parseFloat(item.price) * item.qty;
    }, 0);
    return total;
};