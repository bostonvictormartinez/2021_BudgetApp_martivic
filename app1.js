var budgetController=(function(){

    var Expense=function (id,description,value) {

        this.id=id;
        this.description=description;
        this.value=value;
        
    }

    var Income=function (id,description,value) {

        this.id=id;
        this.description=description;
        this.value=value;
        
    }

    var data={
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    };

    return{
        addItem:function (type, des, val) {

            var newItem;
            var ID;
            ID=0

            if(data.allItems[type].length>0){
                ID=data.allItems[type][data.allItems[type].length-1].id+1;
            }else{
                ID=0;
            }

            if(type==='inc'){
                newItem=new Income(ID, des, val);
            }else if(type==='exp'){
                newItem=new Expense(ID, des, val);
            }

            newItem=data.allItems[type].push(newItem);
            return newItem;

            
        },
        testing:function () {
            console.log(data);
            
        }
    }



})();

var UIController=(function () {

    var DOMstrings={
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value'
    };

    return{
        getInput:function () {
           return {
              // type:document.querySelector('.add__type').value,
               type:document.querySelector(DOMstrings.inputType).value, 
             text:document.querySelector('.add__description').value,
             value:document.querySelector('.add__value').value
        
            };
            
        }
    };

})();

var controller=(function(budgetCtrl,UICtrl){

    var ctrlAddItem=function () {
     //   console.log('ctrl add item works');
        var input;
        var newItemDisplay;

        input=UICtrl.getInput();
        console.log(input);

        newItemDisplay=budgetCtrl.addItem(input.type, input.description, input.value);
        return newItemDisplay

    
    }


    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)
       // console.log('clicked');
        document.addEventListener('keypress',function (event) {
            if(event.key==='Enter'){
                console.log('Enter');
                ctrlAddItem();


            }
        });
    

})(budgetController, UIController);
















