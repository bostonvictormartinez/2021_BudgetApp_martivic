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
    var calculateTotals=function(type){

        var sum;
        sum=0;
        data.allItems[type].forEach(function (cur) {
            sum=sum+cur.value;
            
        });

        data.totals[type]=sum
    }

    var data={
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        },
        budget:0,
        percentage:-1
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

            data.allItems[type].push(newItem)
            return newItem

            
        },
        calculateBudget:function () {

            calculateTotals('exp')
            calculateTotals('inc')

            data.budget=data.totals.inc-data.totals.exp


            if(data.totals.inc>0){
                data.percentage=(data.totals.exp/data.totals.inc)*100;


            }else{
                data.percentage=-1
            }
        
        },
        getBudget:function () {

            return{
                budget:data.budget,
                totalInc:data.totals.inc,
                totalExp:data.totals.inc,
                totalsPercentage:data.percentage
            };
            
        },
        testing:function () {
            console.log(data);
            
        }
    }



})();

var UIController=(function () {

    var DOMstrings={
        inputType:'.add__type',
        inputText:'.add__description',
        inputValue:'.add__value',
        inputBtn:'.add__btn',
        expensesContainer:'.expenses__list',
        incomeContainer:'.income__list',
        budgetLabel:'.budget__value',
        incomeLabel:'.budget__income--value',
        expensesLabel:'.budget__expenses--value',
        percentageLabel:'.budget__expenses--percentage'

    }

    return{
        getInput:function () {
           return {
              // type:document.querySelector('.add__type').value,
               type:document.querySelector(DOMstrings.inputType).value, 
                text:document.querySelector('.add__description').value,
                value:parseFloat (document.querySelector(DOMstrings.inputValue).value)
        
            }
            
        },
        addListItem:function (obj, type) {

            var html;
            var newHTML;
            var element;

            if(type==='exp'){
                element=DOMstrings.expensesContainer
                html='<div class="item clearfix" id="expense%id%><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div></div>'
            }else if(type==='inc'){
                element=DOMstrings.incomeContainer
                html='<div class="item clearfix" id="income%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            newHTML=html.replace('%id%', obj.id)
            newHTML=newHTML.replace('%description%', obj.description)
            newHTML=newHTML.replace('%value%', obj.value)

            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML)

            
        },
        clearfields:function () {

            var fields;
            var fieldsArray;

            fields= document.querySelectorAll(DOMstrings.inputText && DOMstrings.inputValue);
            fieldsArray=  Array.prototype.slice.call(fields);
            fieldsArray.forEach(function (current, des, array) {

                current.value=" ";
                
            });
            fieldsArray[0].focus();
        },
        displayBudget:function (obj) {

            document.querySelector(DOMstrings.budgetLabel).textContent=obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent=obj.totalInc ;
            document.querySelector(DOMstrings.expensesLabel).textContent=obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent=obj.totalPercentage;
           
            
        }
    }

})();

var controller=(function(budgetCtrl,UICtrl){
    
   var updateBudget=function () {
        var budget;
        
        budgetCtrl.calculateBudget()
        budget=budgetCtrl.getBudget()
        console.log(budget)
        UICtrl.displayBudget(budget)
    }

    var ctrlAddItem=function () {
        //console.log('ctrl add works');
        var input;
        var newItem;
        input=UICtrl.getInput();
        //console.log(input)
        if(input.description!==" " && !isNaN(input.value) && input.value>0){
         newItem=budgetCtrl.addItem(input.type, input.text, input.value)
        UICtrl.addListItem(newItem, input.type);
        UICtrl.clearfields()
        updateBudget()
            
        }
    }

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)
       // console.log('clicked');
        document.addEventListener('keypress',function (event) {
            if(event.key==='Enter'){
                console.log('Enter');
                ctrlAddItem();
            }
        })
    

})(budgetController, UIController);
















