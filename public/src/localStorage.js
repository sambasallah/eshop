export const loadItemState = () => {
    try {
      const serializedState = localStorage.getItem('item');
      if (serializedState === null) {
        return "";
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 

export const loadCartState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return "";
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
}

export const loadOrderID = () => {
  try {
    const serializedState = localStorage.getItem('orderID');
    if (serializedState === null) {
      return "";
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveItemState = (state) =>  {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('item', serializedState);
    } catch {
      // ignore write errors
    }
}

export const saveCartState = (state) =>  {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch {
      // ignore write errors
    }
}

export const saveOrderID = (state) =>  {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('orderID', serializedState);
  } catch {
    // ignore write errors
  }
}