    // constructing an array with all the diffrents cards
var   arrCard = [];

arrCard[0] = 'image1.jpg';
arrCard[1] = 'image2.jpg';
arrCard[2] = 'image3.jpg';
arrCard[3] = 'image4.jpg';
arrCard[4] = 'image5.jpg';
arrCard[5] = 'image6.jpg';
arrCard[6] = 'image2.jpg';
arrCard[7] = 'image3.jpg';
arrCard[8] = 'image1.jpg';
arrCard[9] = 'image4.jpg';
arrCard[10] = 'image5.jpg';
arrCard[11] = 'image6.jpg';




    // Shuffling the cards randomly
        function shuffle(array){

            var  size   = array.length;
            var temporaryValue;
            var position;

               while (size > 0 ){
                position = Math.floor( Math.random() * size );
                size--;
                temporaryValue = array[ position ];
                // console.log(temporaryValue);//
                 array[ size ] = array[position];
                 array[ size ] = temporaryValue;
                 }
          return array;
          console.log(array);
       }

var arrCard2 = shuffle(arrCard);
console.log(arrCard2);

// Quand on choisit les cartes , choisir deux cartes si les deyx cartes sont semblables
// Quand on click sur les cartes  fait cette fonction


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
                alert( " You can click once card ");

        }

    }


     function Check (){
      clearInterval(timer);
      numberclick = 0 ;
        if (arrCard2[first] == arrCard2[second]){
            find++ ;
            console.log(find);
            alert("you have found one pair");


         if (find == 6){
            alert(" You won");

            location.reload();
         }

        } else {
            document.images[first].src = "texture.jpg";
             document.images[second].src= "texture.jpg";
             return;
        }


     }





