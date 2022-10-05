export function manageFriends(state, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      //append
      return {friends: [ ...state.friends, action.payload]};
    case "friends/remove":
      return {...state, friends: state.friends.filter(friend => friend.id !== action.payload)};
  
    default:
      return state;
  }
}
