/*

var UIController= (function(){

})();

var budgetController= (function(){

})();



var controller= (function(budgetCtrl, UICtrl){

        var ctrlAddItem=function(){
            console.log('retouched.')
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress',function (event) {
            console.log(event)
            if(event.key==='Enter'){
                ctrlAddItem()
            }
        });
    

})(UIController, budgetController);


*/






var UIController= (function(){

    return function () {
        var value  =document.querySelector('.add__type').value;
        var text=document.querySelector('.add__description').value;
        var number=document.querySelector('.add__value').value;
        console.log(value,text,number)

        
    }
    
        
    



})();

var budgetController= (function(){})();

var ctrlAddItem=function(){
    console.log('clicked ctrlAddItem')
}

var controller= (function(UICtrl,budgetCtrl){

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
        
        //console.log('clicked1')

        document.addEventListener('keypress',function(event){

            //console.log(event)
            if(event.key==='Enter'){
                console.log('you hit enter');
                console.log(UIController())
            }
        })
    

})(UIController,budgetController)

















