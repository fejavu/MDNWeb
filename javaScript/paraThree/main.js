function Person (first,last,age,gender.interests) {
	this.name={
		first,
		last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function() {

		var bioString = this.name.first +' '+ this.name.last +' is ' + this.age + 'years old. ';
		var pronoun;
		if (this.gender==="male"||"Male"||"man"||"Man"||"M"||"m") {
			pronoun = "He likes ";
		}else if (this.gender==="female"||"Female"||"woman"||"Woman"||"w"||"W") {
			pronoun = "She likes ";
		}else{
			pronoun = "They likes ";
		}

		bioString += pronoun;

		if(this.interests.length === 1) {
			bioString += this.interests[0] + '.';
		} else if(this.interests.length === 2) {
			bioString += this.interests[0] + ' and ' + this.interests[1] + '.';
		} else {
			// if there are more than 2 interests, we loop through them
			// all, adding each one to the main string followed by a comma,
			// except for the last one, which needs an and & a full stop
			for(var i = 0; i < this.interests.length; i++) {
			  if(i === this.interests.length - 1) {
			    bioString += 'and ' + this.interests[i] + '.';
			  } else {
			    bioString += this.interests[i] + ', ';
			  }
			}
		}

		alert(bioString);
	};

	this.greeting = function(){
		alert('Hi! I\'m ' + this.name.first + '.');
	};
};