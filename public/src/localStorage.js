export const loadState = () => {
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

export const saveState = (state) =>  {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('item', serializedState);
    } catch {
      // ignore write errors
    }
  }
