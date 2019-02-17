const Post = require("../../models/post");
const User = require("../../models/user");
const SuccessPost = require("../../models/successPost");

module.exports = {
  addPost: async (args, req) => {
    if(req.session.userID === undefined) {
      throw new Error("Авторизуйтесь")
    }
    
    const existingPost = await Post.findOne({ name: args.name });
    
    if (existingPost) {
      throw new Error("Такое имя поста уже существует")
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

    return post;
  },
  getPosts: async (args, req) => {
    if(args.quantity > 15) {
      throw new Error("Превышено кол-во запрашиваемоего.");
    }

    const posts = await Post.find({}).limit(args.quantity)
    return posts;
  },
  deletePost: async (args, req) => {
    if(req.session.userRole !== "admin") {
      throw new Error("Нет прав.");
    }
    
    await Post.deleteOne({name: args.name});
    return true;
  },
  approvePost: async (args, req) => {
    if(req.session.userRole !== "admin") {
      throw new Error("Нет прав.");
    }

    const post = await Post.findOne({name: args.name})

    if(!post) {
      throw new Error("Нет поста с таким именем")
    } 
    
    const checkSuccessPost = await SuccessPost.findOne({name: args.name})

    if(checkSuccessPost) {
      throw new Error("Такой пост существует в удачных постах")
    }
    
    await Post.deleteOne({name: args.name});

    const successPost = new SuccessPost ({
      view: post.view,
      _id: post._id,
      creator: post.creator,
      name: post.name,
      description: post.description,
      content: post.content,
      category: post.category,
      cover: post.cover,
      created: post.created
    })

    await successPost.save();
  }
};
