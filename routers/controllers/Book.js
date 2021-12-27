const BookModel = require("../../db/models/BookModel");
const UsrModel =require("../../db/models/UsrModel")
//سكيما الكتب علشان اجيب البيانات

const getBooks = async (req, res) => {
  try {
    const Books = await BookModel.find({});
    res.status(200).json(Books);
    console.log("Boooook ");
    //اعرف متغير يبحث في البوك موديل
    //حطيت اقواس اوبجكت علشان تقرا البيانات وتدخله فيهم
  } catch (error) {
    res.send(error);
  }
};

const getBook = async (req, res) => {
  const id = req.params.id;
  try {
    const Book = await BookModel.findOne({ _id: id });
    //ب اليوزر موديل يبحث عن عنصر واحد ب استخدام الاي دي 
    res.status(200).json(Book);
  } catch (error) {
    res.send(error);
  }
};

const poostBook = async (req, res) => {
  const { name, img, descripion, url } = req.body;
  //اجيب البيانات من البودي
  const newBook = new BookModel({
    name,
    img,
    descripion,
    url,
  });
  console.log(newBook);
  //بالبوك موديل اسوي متغير جديد  فيه البيانات الوصف و الاسم و الصوره
  try {
    const saveBook = await newBook.save();
    const Book = await BookModel.find({});
    // اسوي متغيرين الاول لحفظ البيانات
    // الثاني علشان ابحث واشيك تنه اتخزن بالبوك موديل
    res.status(201).json(saveBook);
    console.log(" Done ");
  } catch (error) {
    res.send(error);
  }
};
 


const deleteBook = async (req, res) => {
  const id = req.params.id;
  console.log(id,"ddddddeeeeee");

  try {
    const delet = await BookModel.findOneAndDelete({ _id: id });
    console.log(delet, "deeeeeeeeeeel");
    res.status(200).json(delet);
  } catch (err) {
    res.send(err);
  }
};

const getLike = async (req, res) => {
  const userId = req.token.userId;

  try {
    const likeBook = await UsrModel
      .findOne({ _id: userId }).populate("like");
    res.status(200).json(likeBook.like);
    console.log("Done like ");
  } catch (error) {
    res.send(error);
  }
};

const AddLike = async (req, res) => {
  console.log("mmmmmm");
  console.log(req.token,req.params,"mmmmmm");

  const id = req.params.id;
  const userId = req.token.userId;
  try {
    const newLike = await UsrModel.findOneAndUpdate(
      { _id: userId },
      { $push: { like: id } },
      { new: true }
    );

    res.status(201).json(newLike);
    console.log(newLike,"lllike");
  } catch (error) {
    res.send(error);
  }
};


module.exports = { getBooks, poostBook, getBook, deleteBook ,AddLike,getLike};
