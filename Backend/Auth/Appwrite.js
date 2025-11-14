import { config } from "dotenv"
import { Client, Account, Avatars, Databases, Storage } from "appwrite";

config();

const Yini = new Client().setEndpoint("https://tor.cloud.appwrite.io/v1")
.setProject(process.env.APPWRITE_PROJECT_ID);


const Yini_Database = new Databases(Yini);
const Yini_Storage = new Storage(Yini);
const Yini_Account = new Account(Yini);
const Yini_Picture = new Avatars(Yini);

export { Yini, Yini_Database, Yini_Storage, Yini_Account, Yini_Picture };