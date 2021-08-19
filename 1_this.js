
function log() {
	console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
  name: 'Vic',
  log: function() { console.log(this) },
  arrawLog: () => console.log(this),
  logTimeout: function() {
    /// let self = this;  change this to self -> log person
  	setTimeout(function() {
    	console.log(this)
    }, 0)
  },
  arrowLogTimeout: function() {
    setTimeout(() => console.log(this), 10)
  },
  arrow2LogTimeout: () => {
    setTimeout(() => console.log(this), 10)
  }
}

//person.log(); // person
///person.arrawLog(); // window
person.logTimeout(); // window
//person.arrowLogTimeout() // person
//person.arrow2LogTimeout(); // window