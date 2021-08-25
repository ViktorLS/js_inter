function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: "Vic",
  log: log,
  arrawLog: () => console.log(this),
  logTimeout: function () {
    /// let self = this;  change this to self -> log person
    setTimeout(function () {
      console.log(this);
    }, 0);
  },
  arrowLogTimeout: function () {
    setTimeout(() => console.log(this), 1000);
  },
  arrow2LogTimeout: () => {
    setTimeout(() => console.log(this), 1000);
  }
};

log(); // => window
person.log(); // => person
person.arrawLog(); // => window
person.logTimeout(); // => window
person.arrowLogTimeout(); // => person
person.arrow2LogTimeout(); // => window
person.logTimeout(); // => window
