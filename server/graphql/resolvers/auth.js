const bcrypt = require("bcryptjs");
const User = require("../../models/user");

module.exports = {
  logout: async (args, req) => {
    req.session.destroy()
    return true
  },
  signup: async (args, req) => {
    const existingUser = await User.findOne({ email: args.email });
    if (existingUser) {
      throw new Error("User exists already.");
    }

    if(args.password.length > 7 || args.password.length > 30) {
      throw new Error("Длина не соответствует требованиям");
    }

    const hashedPassword = await bcrypt.hash(args.password, 12);
    const user = new User({
      email: args.email,
      password: hashedPassword,
      nickname: args.nickname
    });

    await user.save();

    req.session.userID = user._doc._id;
    req.session.userRole = user._doc.role;
    req.session.userNickname = user._doc.nickname;

    return user;
  },
  login: async ({ email, password }, req) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist!");
    }
    if (user) {
      if (await bcrypt.compareSync(password, user.password)) {
        req.session.userID = user._doc._id;
        req.session.userRole = user._doc.role;
        req.session.userNickname = user._doc.nickname;

        return { ...user._doc };
      }

      throw new Error("Incorrect password.");
    }

    throw new Error("No Such User exists.");
  }
};
