const authentication = {
    isLoggedIn: false,
  
    onAuthentication() {
        localStorage.setItem('user',this.isLoggedIn)
    },
    getLogInStatus() {
      return this.isLoggedIn;
    }
  }
  
  export default authentication