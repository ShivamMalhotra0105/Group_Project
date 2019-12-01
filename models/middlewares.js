// File Name : Middlewares
// Author Name : Shivam, Egecan, Lovedeep, Sukhpreet
// Website Name: Usurvey
// File Description: Authentication File 



// Check whether a user is registered or not
exports.authRequire = (req, res, next) => {      
    const isAuth = req.isAuthenticated();
    if (isAuth) {
      return next();
    }
  
    res.redirect('/login');
  };
  
  exports.authNotRequire = (req, res, next) => {   
    const isAuth = req.isAuthenticated();
    if (!isAuth) {
      return next();
    }
  
    return next(new Error('login first'));
  };
  