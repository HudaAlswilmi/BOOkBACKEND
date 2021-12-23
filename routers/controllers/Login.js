const UsrModel = require("../../db/models/UsrModel");
// احتاج السكيما المستخدمه

const bcrypt = require("bcrypt");
//بي كريبت علشان اقارن الباس المشفر و المدخل

const jwt = require("jsonwebtoken");
// جي دبليو تي علشان اجيب التوكن

const AddlogIn = async (req, res) => {
  let { email, pass } = req.body;
  //من البودي اجيب  الايميل و الباس وورد

  try {
    const user = await UsrModel.findOne({ email: email });
    if (user != null) {
      const check = await bcrypt.compare(pass, user.pass);
      //من اليوزر موديل ابحث  عن الايميل واشيك على الايميل المدخل نفس اللي موجود ولا
      //اذا كان موجود اشيك ع الباسوورد المشفر والي ادخله اليوزر

      if (check === true) {
        const payload = { userId: user._id, userName: user.name };
        const token = jwt.sign(payload, "huda");
        res.status(200).json({ token });
        // أذا شيكت وكان موموجود اجيب  اي دي و الاسم من التوكن
      } else {
        res.status(403).json("Wrong PassWord!!! ");
      }
    } else {
      res.status(404).json("Wrong Email!!!!");
    }
  } catch (error) {
    res.send(error);
  }
};

// أذا خطاء بيجيب لي رسالة الاخطاء
module.exports = { AddlogIn };
