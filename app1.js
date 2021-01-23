var budgetController=(function () {
    var Expense =function (id, description, value) {

        this.id=id;
        this.description=description;
        this.value=value;
    
    }

    var Income =function (id, description, value) {

        this.id=id;
        this.description=description;
        this.value=value;
    
    }

    
    var allExpenses=[];
    var allIncomes=[];
    var totalExpenses=0;

    var data={
        allItems:{
            exp:[],
            inc:[],
        },
        totals:{
            exp:0,
            inc:0
        }
    };
    return{
        addItem:function (type,des,val) {

            var newiitem;
            var ID;
            ID=0;

            if(data.allItems[type].length>0){
                ID=data.allItems[type][data.allItems[type].length-1].id+1;


            }else{
                ID=0
            }
          //  ID=data.allItems[type][data.allItems[type].length-1].id+1;

            if(type==='exp'){
                newiitem=new Expense(ID,des,val);
            }else if(type==='inc'){
                newiitem=new Income(ID,des,val);

            }
            data.allItems[type].push(newiitem);
            return newiitem;

        },
        testing:function () {
            console.log(data);
            
        }
    
    };

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

var controller=(function (budgetCtrl,UICtrl) {
    

    var ctrlAddItem=function () {

        var input,newiitem;
        input=UICtrl.getInput();

        newiitem=budgetCtrl.addItem(input.type, input.description,input.value);
        
        console.log(input);

       console.log('ctrl add item working');
        
    };



    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

        console.log('clicked');
        document.addEventListener('keypress',function (event) {

            console.log(event)
            if(event.key==='Enter'){
                console.log('enter hit');

                ctrlAddItem()
            };
            
        });
        
    

})(budgetController,UIController);













