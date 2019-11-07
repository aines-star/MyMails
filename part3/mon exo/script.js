/* -------- CODING PART WITH DOM INSTRUCTIONS --------------------------------------------------------------------*/

// Calculating the number of messages 
var messagesCount = document.getElementsByTagName('p').length

// updating the counter (with id='count')
document.getElementById('count').textContent = messagesCount


// For each paragraph 'p'
for(var i=0; i<document.getElementsByTagName('p').length; i++) {

      // 1) Listening for the click on a trash
      document.getElementsByClassName('trash')[i].addEventListener("click", 
       function(){ 

          // 2) deleting the parent of the trash --> the entire Row 
          this.parentNode.remove();

          // 3)- Updating the count again

            // We need the acquisition of the messages numbers again
            messagesCount = document.getElementsByTagName('p').length

            // updating counter once more
            document.getElementById('count').textContent = messagesCount
       }
      );
};   

/* -------------------------------------------------------------------------------------------------------*/
document.getElementById("btn-add").addEventListener("click", function(){
      console.log("click détécté !")
      // Je recup le texte du input
      var contenuInput = document.getElementById('add-message').value;

      // Je creer l'element div 
      var maDiv = document.createElement('div');
      // j'affecte une classe a l'element div
      maDiv.className ="row";

      // je créé l'element image
      var monImage = document.createElement('img');
      // jaffecte classe a image
      monImage.className ='avatar';
      monImage.src ="avatar-1.jpg"
      // Je rattache mon image a la div
      maDiv.appendChild(monImage);

      //Je creer la sous div et ses elemement
      maDiv2 = document.createElement('div');
      maDiv2.className = "content";
      var titre = document.createElement('h6')
      var maBaliseP = document.createElement('p');
 // je rattache le texte de la input dans le p
      maBaliseP.textContent = contenuInput;
// je rattache les element de la sous div dans la sou div
      maDiv2.appendChild(titre);
      maDiv2.appendChild(texte);

   //   Je rattache la sous div a la div principal
      maDiv.appendChild(maDiv2);

// Je ratache la div principal au body
      document.body.appendChild(maDiv);




}
);
var newText = document.getElementById('add-message').value