import { ID } from "appwrite";
import { Yini_Account } from "./Appwrite";

let Account = null; // This is your global account variable

async function SIGNUP(Name, Email, Password) {
  try {
    const Created_Account = await Yini_Account.create({
      userId: ID.unique(),
      name: Name,
      email: Email,
      password: Password,
    });

    // Assign it to your global Account variable
    Account = Created_Account;

    // Send verification email
    await Yini_Account.createEmailVerification({
      url: "https://yini-exercise.vercel.app/AuthConfirmed.html",
    });

    return Account;
  } catch (err) {
    console.error("Signup error:", err);
  }
}

// You can also add a login function
async function SIGNIN(Email, Password) {
  try {
    const Session = await Yini_Account.createSession(Email, Password);
    Account = await Yini_Account.get();
    return Account;
  } catch (err) {
    console.error("Login error:", err);
  }
}

export { Account, SIGNUP, SIGNIN };
