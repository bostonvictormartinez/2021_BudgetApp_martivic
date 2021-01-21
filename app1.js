var budgetController= (function(){})()

var UIController= (function(){
    
    return{
        getInput:function(){
          
            return{
           // var type=document.querySelector('.add__type').value;
            //var text=document.querySelector('.add__description').value;
            //var value=document.querySelector('.add__value').value;
        
            type:document.querySelector('.add__type').value,
           text:document.querySelector('.add__description').value,
             value:document.querySelector('.add__value'.value)
            };
    }};   
})()


var controller= (function(budgetCtrl,UICtrl){

    var ctrlAddItem=function () {
        var input=UICtrl.getInput();
        console.log(input)
   }

  //  document.querySelector('.add__btn').addEventListener('click',function (event) {
        document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)

        console.log('clicked')
        document.addEventListener('keypress',function (event) {

            console.log(event)

            if(event.key==='Enter'){
                console.log('you hit enter')
                ctrlAddItem()
            };  
    })

})(budgetController,UIController)













