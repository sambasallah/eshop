export const inCart = (item, cartItems) => {
    let result = cartItems.filter((i) => i.id === item.id);
    if(result.length === 0) {
        return false;
    }
    return true;
}

export const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch(e) {
        return false;
    }
    return true;
}
