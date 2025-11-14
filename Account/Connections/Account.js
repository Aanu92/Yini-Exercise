// fetch("")


const Account = null;

if (!Account) {
    window.location.assign("../Auth/Signin.html");
}

console.log(Account);

document.title = `${Account.Name} - Yini Exercise`

const YiniName = document.querySelectorAll(".YiniName");

YiniName.forEach(Yini => {
    Yini.innerText = Account.Name
});

const Question = document.querySelector(".Account_Dashboard .Intro p");

Question.innerText =
Account.Status === "Student" ? "Get Exercising!" : "What would you do today?";





if (Account.Progress.Walked >= Account.Progress.Walked) {
    console.log("Excellent Job!");
}

/* 
    Name: "Praise",
    Country: "Canada",
    Age: 10,
    Email: "praiseo5@educbe.ca",
    Status: "Student",
    Progress: {
        Num: 20,
        Walked: 1000
    },
    Goals: {
        Walked: 1000
    }
*/