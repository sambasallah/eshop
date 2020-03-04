import React from 'react';

export const limitTitle = (str) => {
    let newTitle = '';
    if(str.length < 18) {
        return str;
    } 
    for(let i = 0; i < 18; i++) {
        newTitle += str.charAt(i);
    }
    return newTitle.trim() + "..";
}
