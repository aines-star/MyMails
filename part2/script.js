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



