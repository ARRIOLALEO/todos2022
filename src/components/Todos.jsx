import {Component} from 'react'

export default class Todos extends Component{
    constructor(){
        super();
        this.state ={
            todos:[],
            actualTodo :{value:"",isDone:false} // {value:"",isDone:false, dueDate:date,subTodos:[]}
        }
    }
    // CRUD
    delete = (index) =>{
       console.log(index)
    }
    render(){
        const btn={
        width:"250px",
        backgroundColor:'red'
        }
        const done ={
            textDecoration: "line-through"
        }
        return(
            <>
            <h1>Todos</h1>
            <ul>
                {
                    this.state.todos.map((todo,index)=>{
                        return(<li key={todo+index} >
                            <span style={todo.isDone ? done : {}} >{todo.value}</span>
                            <button style={btn} onClick={()=> {
                                // we copy the state
                                // we change the index 
                                // than we update our state
                                const copy = [...this.state.todos]
                                copy[index].isDone = true
                                console.log(copy)
                                this.setState({todos:copy})
                                }}>Done</button>
                        <button style={btn} onClick={()=>{
                            this.deleteBtn(index)
                        }}>X</button>
                        </li>)
                    })
                }
            </ul>
            <input type="text" className='input' placeholder="add your Todo" value={this.state.actualTodo.value} onChange={(e)=>{this.setState({actualTodo:{value:e.target.value,isDone:false}})}}/>

            <button style={btn} onClick={()=>{
                // not accept duplicate todos
                this.setState({todos:[this.state.actualTodo,...this.state.todos]})
                this.setState({actualTodo:{value:"",isDone:false}})
            }}>Add Todo</button>
            </>
        )
    }
}

