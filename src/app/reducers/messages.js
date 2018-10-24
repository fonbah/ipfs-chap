const messages = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return [...state, action.text].slice(-20)
      default:
        return state
    }
  }
  
  export default messages