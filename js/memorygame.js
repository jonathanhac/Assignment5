




var snd = new Audio("./images/tropical.wav"); // buffers automatically when created
    function sound(){
    snd.play()
    };

    sound();



var   arrCard = [];

arrCard[0] = './images/image1.jpg';
arrCard[1] = './images/image2.jpg';
arrCard[2] = './images/image3.jpg';
arrCard[3] = './images/image4.jpg';
arrCard[4] = './images/image5.jpg';
arrCard[5] = './images/image1.jpg';
arrCard[6] = './images/image2.jpg';
arrCard[7] = './images/image3.jpg';
arrCard[8] = './images/image4.jpg';
arrCard[9] = './images/image5.jpg';
arrCard[10] = './images/image6.jpg';
arrCard[11] = './images/image6.jpg';




    // Shuffling the cards randomly
            function shuffle(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		};

var arrCard2 = shuffle(arrCard);
console.log(arrCard2);



var numberclick = 0;
var first;
var second;
var find = 0;


    function Choosing(card){
        if (numberclick == 0){
           first = card;
          document.images[card].src= arrCard2[card];
          numberclick = 1 ;

        }   else if ( numberclick == 1) {
           numberclick = 2 ;
            second = card ;
            document.images[card].src= arrCard2[card];

            timer = setInterval( Check ,500 );

        }   else {

        }

    }


     function Check (){
      clearInterval(timer);
      numberclick = 0 ;
        if (arrCard2[first] == arrCard2[second]){
            find++ ;
            console.log(find);



         if (find == 6){
            document.getElementById("win_1").style.display="block";


         }

        } else {
            document.images[first].src = "./images/jungle.jpg";
             document.images[second].src= "./images/jungle.jpg";
             return;
        }


     }


