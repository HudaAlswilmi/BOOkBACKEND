const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    //لاني ابي العنصر اللي رقم الانكس له 1 
    //اسوي سبلايس واختار رقم العنصر اللي ابي اللي هو 1
    const valid = jwt.verify(token, "ABC");
    req.token = valid;
    next();  
    // نكست تعني اذا تحققت من انها شغاله روح للي بعده 
  } catch (error) {
    res.status(403);
    res.send(error);
  }
};

module.exports = { authentication };
