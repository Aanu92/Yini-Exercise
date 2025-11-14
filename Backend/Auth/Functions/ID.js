class Yini_ID {
  constructor(Times = 10) {
    let ID = "";

    for (let yini = 0; yini < Times; yini++) {
      const YiniNumber = Math.floor(Math.random() * 10);
      ID = ID + String(YiniNumber);
    }

    this.ID = ID;
  }
}
