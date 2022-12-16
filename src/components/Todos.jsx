import {Component} from 'react'

export default class Todos extends Component{
    constructor(){
        super();
        this.state ={
            todos:[],
            actualTodo :"" // {value:"",isDone:false, dueDate:date,subTodos:[]}
        }
    }
    // CRUD

    render(){
        return(
            <>
            <h1>Todos</h1>
            <ul>
                {
                    this.state.todos.map((todo)=>{
                        return(<li>{todo}<button>Done</button>
                        <button onClick={()=>{
                            // i need to delete this todo from my state

                        }}>X</button>
                        </li>)
                    })
                }
            </ul>
            <input type="text" className='input' placeholder="add your Todo" value={this.state.actualTodo} onChange={(e)=>{this.setState({actualTodo:e.target.value})}}/>
            <button onClick={()=>{
                this.setState({todos:[this.state.actualTodo,...this.state.todos]})
                this.setState({actualTodo:""})
            }}>Add Todo</button>
            </>
        )
    }
}

