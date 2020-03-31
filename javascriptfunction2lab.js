

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
				return console.log('End of Slideshow');
			}
		},

	previousPhoto: function(){

			// console.log(this.photoList[0]);

			if(this.currentPhotoIndex > 0){
				this.currentPhotoIndex--;
				console.log(this.photoList[this.currentPhotoIndex]);
				
			} else {
				return console.log('Start of Slideshow');
			}
		} 

	
}

slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.previousPhoto();
slideshow.previousPhoto();
slideshow.previousPhoto();
slideshow.previousPhoto();


// console.log(slideshow.currentPhotoIndex);

// var teacher = {
// 	name: 'Assaf',
// 	sayName: function() {
// 		console.log(this.name);
// 	}
// }
// teacher.sayName(); //'Assaf'