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
    res.status(200).json(userDetails);
  } catch (e) {
    console.log(`Recheck your code, the error is ${e}`);
    res.status(400).json({ message: e.message });
  }
};

export  {createUserDetails};
