import {Component} from 'react'

export default class Todos extends Component{
    constructor(){
        super();
        this.state ={
            todos:""
        }
    }
    render(){
        return(
            <h1>Todos</h1>
        )
    }
}

