function user(name, email){
	this.name = name;
	this.email = email;
	this.currentScore = 0;
	this.quizScore = [];
}

user.prototype = {
	constructor: user,
	saveScore: function(scoreToAdd){
		this.quizScore.push(scoreToAdd)

	},
	nameAndScore:function(){
		var scores = this.quizScore.length > 0 ? this.quizScore.join(','): "No Score to Display";
		return this.name + " " + "scores:" + scores;
	},
	/*changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    },*/

	changeName:function(newName){
		this.name = newName;
		return "New Name Saved as:" + this.name; 
	}

}
user.prototype.changeEmail = function(newEmail){
	this.email = newEmail;
	 return "New Email Saved: " + this.email;

}


//first user
firstUser = new user("ibrahim", "ibravoh149@gmail.com");
firstUser.changeEmail("ibrahim@gmail.com");
firstUser.saveScore(50);
firstUser.saveScore(55);
firstUser.nameAndScore();
//firstUser.addUpScore();

console.log(firstUser);
console.log(firstUser.nameAndScore());
console.log(firstUser.changeEmail("ibrahim@gmail.com"));



//second user
secondUser = new user("iliyas", "iliyas@gmail.com");
secondUser.saveScore(25);
secondUser.nameAndScore();

console.log(secondUser);
console.log(secondUser.nameAndScore());

//thirdUser
thirdUser = new user("Rolix", "rolix@gmail.com");
thirdUser.changeName("Rolake");
thirdUser.saveScore(90);
thirdUser.saveScore(30);
thirdUser.nameAndScore();

console.log(thirdUser);
console.log(thirdUser.nameAndScore());
console.log(thirdUser.changeName("Rolake"));



//fouth usesr
fourthUser = new user("chika", "chika@gmail.com");
fourthUser.changeEmail("Chusky@gmail.com");
fourthUser.changeName("Chusky");
fourthUser.saveScore(25);
fourthUser.saveScore(60);

console.log(fourthUser);
console.log(fourthUser.nameAndScore());

//fifth user
fifthUser = new user("Phil", "Philip_Newman@gmail.com");
fifthUser.changeEmail("philip@yahoo.com");
fifthUser.saveScore(95);
fifthUser.saveScore(45);

console.log(fifthUser);
console.log(fifthUser.nameAndScore());
console.log(fifthUser.changeEmail("philip@yahoo.com"));