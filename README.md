# React-Frontend

##This repo contains the basic implementation of react Todo app

##Requirements - 

>Nodejs
>React
##Basic commands - 
       In terminal type the following command after installing the node and react
       create the default react app by "npx create-react-app **appname**"
       go the app folder by "cd **appname**"
       start the app by "npm start"

##index.js
       basic layout of the page is added with the use of div elements and classes
       Incluse basic structure from Todolist.js

##index.css 
      styling of the elements is done in simple css
      
##Todolist.js
      made the basic form for value input from the user
      <form onSubmit={this.addItem}>
                        <input id="input1" ref={(a) => this._inputElement =a}
                                                    placeholder="enter subject">
                        </input>
                    <button id="button1" type="submit" >add</button>
      </form>

      ###defined the class todolist
      added the constructor to transfer the properties from state
      declared the item array for the storing the input from the user
      **constructor(props){
        super(props);
        
        this.state ={
            items: []
        };**
        
        
       ###Define addItem function
       
       check if input from the user is not null then 
          **if(this._inputElement.value !== "")**
       declare the new item
          **var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };**
       value of the newItem variable is given by 
        text = input value from user
        key = current date and time
        
       add this newItem variable to the items array already defined
           items: prevState.items.concat(newItem)
           
       define mode in state 
           **isInEditMode: false**
       
       give the blank value again to the form once the input is taken
       
          **this._inputElement.value="";**
       
       ###Define the delete function - 
       
       it takes value by key and deletes it(returning a null value)
          **item.key !== key**
       
 ##TodoItems.js
 
        in render function of class Todoitems
          
            declare the two variables and assign the values
            
            **var todoEntries = this.props.entries;
            var listItems = todoEntries.map(this.createTasks);/in this way task is created for every item **
            
            ###define createTask function 
            which will create the card like button for every tasks
            define the onClick button to delete the entry
            
                **<li onClick={() => this.delete(item.key)} 
                  key={item.key}>{item.text}</li>**
                  
            ###define delete function which contains
             
                **this.props.delete(key);**
                
 ##TODO:
  
  > add moving card functionality
  > complete edit card functionality
             
              
              
            
        
