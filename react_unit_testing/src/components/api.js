// Simulating api
export const api = {
  createItem: (url, newItem) => {
    return Promise.resolve(newItem);
  },
};

export function getUser(){
  return Promise.resolve({name:'soumya',id:'1'});
}
