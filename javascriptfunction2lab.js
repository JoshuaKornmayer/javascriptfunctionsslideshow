

var slideshow = {
	photoList: ['photoname1', 'photoname2', 'photoname3'],
	currentPhotoIndex: 0, 
		
	getCurrentPhoto: function(){
		console.log('This is the current photo: ' + this.photoList[this.currentPhotoIndex])
		},

	nextPhoto: function(){

			// console.log(this.photoList[0]);

			if(this.currentPhotoIndex < this.photoList.length){
				
				console.log(this.photoList[this.currentPhotoIndex]);
				this.currentPhotoIndex++;
			} else {
				 console.log('End of Slideshow');
				 this.pause();
			}
		},

	previousPhoto: function(){

			// console.log(this.photoList[0]);

			if(this.currentPhotoIndex > 0){
				this.currentPhotoIndex--;
				console.log(this.photoList[this.currentPhotoIndex]);
				
			} else {
				console.log('Start of Slideshow');
			}
		}, 

	playInterval: "",

	play: function(){

		this.playInterval = setInterval(function(){slideshow.nextPhoto()
			
		},2000);
		
		//Runs immediately
		// console.log('Now my name is ' + this.name);
	},

	pause: function(){
		clearInterval(this.playInterval);
		console.log("Paused");
	}

	
	
}

slideshow.play();

// setTimeout(function(){
// 			console.log('later my name is ' + this.name);
// 		},1000)


// slideshow.getCurrentPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.previousPhoto();
// slideshow.previousPhoto();
// slideshow.previousPhoto();
// slideshow.previousPhoto();
// slideshow.previousPhoto();

// setTimeout(function(){
// 			console.log('later my name is ' + this.name);
// 		},1000)


// console.log(slideshow.currentPhotoIndex);

// var teacher = {
// 	name: 'Assaf',
// 	sayName: function() {
// 		console.log(this.name);
// 	}
// }
// teacher.sayName(); //'Assaf'