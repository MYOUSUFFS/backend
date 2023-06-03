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

    // console.log(checkUser);

    if (checkUser) {
      res.status(400).json({msg:"user already existed"});
    }else if(!checkUser){
      res.status(200);
      console.log("Working well");
    }
  } catch (e) {
    res.status(200).json({msg:"No user in this mail-id"});
  }
};

export { createUserDetails, authUser };
