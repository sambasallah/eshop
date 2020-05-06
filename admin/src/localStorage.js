export const loadTokenState = () => {
    try {
      const serializedState = localStorage.getItem('token');
      if (serializedState === null) {
        return "";
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
}

export const loadLoggedInState = () => {
    try {
      const serializedState = localStorage.getItem('loggedIn');
      if (serializedState === null) {
        return "";
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
}

export const saveTokenState = (state) =>  {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('token', serializedState);
    } catch {
      // ignore write errors
    }
}

export const saveLoggedInState = (state) =>  {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('loggedIn', serializedState);
    } catch {
      // ignore write errors
    }
}


