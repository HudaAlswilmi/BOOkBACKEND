const AudioBookModel = require("../../db/models/AudioBookModel");
const UsrModel =require("../../db/models/UsrModel")
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

  const getAudioBook = async (req, res) => {
    const id = req.params.id;
    try {
      const AudioBook = await AudioBookModel.findOne({ _id: id });
      //ب اليوزر موديل يبحث عن عنصر واحد ب استخدام الاي دي
      res.status(200).json(AudioBook);
    } catch (error) {
      res.send(error);
    }
  };

  const AddCommint = async (req, res) => {
      try {
        const {Commint} = req.body;
      const id = req.params.id;
      const user = req.token.userId;
      const userName=req.token.userName
      console.log(id , user ,userName);
      const response  = await  AudioBookModel.findOneAndUpdate({ _id: id }
      ,{ $push: { Commint: {Commint, userName , user} } },{new: true})
      //الكي اللي اسمه كومنت يكون داخله اسم اليوزر و الكومينت الجديد 
      res.status(200).json(response.Commint)
      } catch (error) {
        res.status(400).json(error)
      }
    };


    const deleteCommint = async (req, res) => {
      try {

      const {Commint} = req.body;
      const id = req.params.id;
      const user = req.token.userId;
      const userName=req.token.userName
      console.log(id , user ,userName);
      const response  = await   AudioBookModel.findOneAndUpdate({ _id: id }
      ,{ $pull: { Commint: {Commint, userName, user} } },{new: true})
      //الكي اللي اسمه كومنت يكون داخله اسم اليوزر و الكومينت الجديد 
          res.send(res);
        } catch (error) {
           res.send(err)
        };
    };

    const getAudioLike = async (req, res) => {
        const userId = req.token.userId;
      
        try {
          const likeBook = await UsrModel.findOne({ _id: userId }).populate("likeAudio");
          res.status(200).json(likeBook.likeAudio);
          console.log("Done like ");
        } catch (error) {
          res.send(error);
        }
      };
    
      const AddAudioLike = async (req, res) => {
        console.log("mmmmmm");
        console.log(req.token, req.params, "mmmmmm");
      
        const id = req.params.id;
        const userId = req.token.userId;
        console.log(id,"kkkkkkk");
        try {
          const newLike = await UsrModel.findOneAndUpdate(
            { _id: userId },
            { $push: { likeAudio: id } },
            { new: true }
          );
      
          res.status(201).json(newLike);
          console.log(newLike, "lllike");
        } catch (error) {
          res.send(error);
        }
      };


      const remov = async (req, res) => {
        const id = req.params.id;
        const userId = req.token.userId;
        console.log(id);
        console.log(userId);
        try {
          const unLike = await UsrModel.findOneAndUpdate(
            { _id: userId },
            { $pull: { likeAudio: id } },
            { new: true }
          );
          const likeBook = await UsrModel.findOne({ _id: userId }).populate("likeAudio");
          res.status(200).json(likeBook.likeAudio);
          console.log(unLike, "dellllll")
        } catch (error) {
          res.send(error);
        }
      };
      

  module.exports = { getBoooks, postBooks ,getAudioBook ,AddCommint ,getAudioLike ,AddAudioLike ,remov ,deleteCommint};
