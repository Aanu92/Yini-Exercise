import { ID } from "appwrite";
import { Yini_Account } from "./Appwrite";

async function SIGNUP(Name, Email, Password) {
    try {
      const Created_Account = await Yini_Account.create({
          userId: ID.unique(),
          name: Name,
          email: Email,
          password: Password,
      });

    //   await Yini_Account.createEmailVerification({
    //     url: ""
    //   })
  
      console.log(Created_Account);
    } catch (Err) {
        console.error(`Sorry... ${Err}`)
    }
}

async function SIGNIN(Email, Password) {
    
}

export { SIGNUP };