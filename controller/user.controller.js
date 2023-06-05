import userModel from "../model/user_details.js";

const createUserDetails = async (req, res) => {
  const { email, phone, password, companyName, companyAddress } = req.body;

  try {
    const userDetails = await userModel.create({
      email,
      phone,
      password,
      companyName,
      companyAddress,
    });
    console.log(`User create success`);
    res.status(200).json(userDetails);
  } catch (e) {
    console.log(`Recheck your code, the error is ${e}`);
    res.status(400).json({ message: e.message });
  }
};

const authUser = async (req, res) => {
  const { email, phone, password, companyName, companyAddress } = req.body;

  try {
    const checkUser = await userModel.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ msg: "user already existed" });
    } else if (!checkUser) {
      const createUser = userModel.create({
        email,
        phone,
        password,
        companyName,
        companyAddress,
      });
      return res.status(201).json({ msg: "New user is create successfully" });
    }
  } catch (e) {
    return res.status(200).json({ msg: "No user in this mail-id" });
  }
};

export { createUserDetails, authUser };
