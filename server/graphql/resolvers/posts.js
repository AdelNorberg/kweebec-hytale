const News = require("../../models/news");
const Post = require("../../models/post");
const User = require("../../models/user");

module.exports = {
  addPost: async (args, req) => {
    if(req.session.userID === undefined) {
      throw new Error("Авторизуйтесь")
    }

    const user = await User.findOne({ _id: req.session.userID });

    const post = new Post ({
      creator: user.nickname,
      name: args.name,
      description: args.description,
      content: args.content,
      category: args.category,
      cover: args.cover
    })

    user.posts[user.posts.length] = post._id;

    await post.save();  
    await user.save();

    return post;
  },
  addNews: async (args, req) => {
    if(req.session.userID === undefined) {
      throw new Error("Авторизуйтесь")
    }

    const user = await User.findOne({ _id: req.session.userID });

    const news = new News ({
      creator: user.nickname,
      name: args.name,
      description: args.description,
      content: args.content,
      cover: args.cover
    })
    
    user.posts[user.posts.length] = news._id;

    await news.save();
    await user.save();

    return news;
  }
};
