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

export const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      return "";
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// export const loadTokenExpiredState = () => {
//   try {
//     const serializedState = localStorage.getItem('tokenExpired');
//     if (serializedState === null) {
//       return "";
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// }

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

export const saveUserState = (state) =>  {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('user', serializedState);
  } catch {
    // ignore write errors
  }
}


// export const saveTokenExpiredState = (state) =>  {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('tokenExpired', serializedState);
//   } catch {
//     // ignore write errors
//   }

// }
