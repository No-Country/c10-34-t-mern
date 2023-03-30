import Users from "../models/Users";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    return res.jason({});
  } catch (err) {
    console.log(err);
  }
};
