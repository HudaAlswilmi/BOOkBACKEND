const AudioBookModel = require("../../db/models/AudioBookModel");
//سكيما الكتب علشان اجيب البيانات

const getBoooks = async (req, res) => {
  try {
    const Booking = await AudioBookModel.find({});
    res.status(200).json(Booking);
    console.log("Boooook ");
    //اعرف متغير يبحث في البوك موديل
    //حطيت اقواس اوبجكت علشان تقرا البيانات وتدخله فيهم
  } catch (error) {
    res.send(error);
  }
};

const postBooks = async (req, res) => {
    const { name, img, descripion, url } = req.body;
    //اجيب البيانات من البودي
    const newBook = new AudioBookModel({
      name,
      img,
      descripion,
      url,
    });
    console.log(newBook);
    //بالبوك موديل اسوي متغير جديد  فيه البيانات الوصف و الاسم و الصوره
    try {
      const saveBook = await newBook.save();
      const Books = await AudioBookModel.find({});
      // اسوي متغيرين الاول لحفظ البيانات
      // الثاني علشان ابحث واشيك انه اتخزن بالبوك اوديو موديل
      res.status(201).json(saveBook);
      console.log(" Done ");
    } catch (error) {
      res.send(error);
    }
  };

  module.exports = { getBoooks, postBooks };