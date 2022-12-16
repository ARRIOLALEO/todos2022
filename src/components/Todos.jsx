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
                    this.state.todos.map((todo,index)=>{
                        return(<li key={todo+index}>{todo}<button>Done</button>
                        <button onClick={()=>{
                            const copyTodos =[...this.state.todos]
                            copyTodos.splice(index,1)
                            this.setState({todos:copyTodos})
                        }}>X</button>
                        </li>)
                    })
                }
            </ul>
            <input type="text" className='input' placeholder="add your Todo" value={this.state.actualTodo} onChange={(e)=>{this.setState({actualTodo:e.target.value})}}/>
            <button onClick={()=>{
                // not accept duplicate todos
                this.setState({todos:[this.state.actualTodo,...this.state.todos]})
                this.setState({actualTodo:""})
            }}>Add Todo</button>
            </>
        )
    }
}

