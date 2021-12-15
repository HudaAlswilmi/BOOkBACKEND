const BookModel = require("../../db/models/BookModel");
//سكيما الكتب علشان اجيب البيانات 

const getBooks = async (req, res) => {
  try {
    const Books = await BookModel.find({})
    res.status(200).json(Books);
    //اعرف متغير يبحث في البوك موديل 
    //حطيت اقواس اوبجكت علشان تقرا البيانات وتدخله فيهم 
console.log("Boooook ");
  } catch (error) {
    res.send(error);
  }
};


const postBook = async (req, res) => {
    const { name, img, descripion } = req.body;
    //اجيب البيانات من البودي   
    const newBook = new BookModel({
      name,
      img,
      descripion,
    });
    console.log(newBook);
    //بالبوك موديل اسوي متغير جديد  فيه البيانات الوصف و الاسم و الصوره 
    try {
      const saveBook = await newBook.save();
      const Book = await BookModel.find({});
      // اسوي متغيرين الاول لحفظ البيانات 
      // الثاني علشان ابحث واشيك تنه اتخزن بالبوك موديل 
      res.status(200).json(Book);
      console.log(" Done ");
    } catch (error) {
      res.send(error);
    }
  };

module.exports = { getBooks ,postBook };
