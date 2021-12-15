const UsrModel = require("../../db/models/UsrModel");
//احتاج سكيما اليوزر علشان احفظ البيانات الجديده 
const bcrypt = require("bcrypt");
//بي كريبت علشان اشفر الباس وورد 


const addSignUp = async (req,res)=>{
  let {name ,email, pass}  =req.body 
  console.log({name ,email, pass});
  //فنكشن جديد يسوي تسجيل ياخذ الاسم و الايميل و الباسوورد من البودي 
  try {
    pass = await bcrypt.hash(pass,10);
    const NewUser = new UsrModel (
      {name ,email, pass}
    )
    //الباسوورد ياخذ وقت وبعدين ب استخدام بي كريبت و الهاش
     // يعمل له تشفير وثم ينشئ يوزر جديد في اليوزر موديل 
    const resssult= await NewUser.save();
    res.status(201).json(resssult);
    console.log(res.data);
    //النتيجه تاخذ وقت وبعدين تحفظ اليوزر 
  } catch (error) {
    res.send(error)
  }
}

module.exports = { addSignUp };
