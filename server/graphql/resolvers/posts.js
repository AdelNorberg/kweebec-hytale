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

    user.posts.push(post._id);

    await post.save();  
    await user.save();

    console.log(user)
    return post;
  }
};
