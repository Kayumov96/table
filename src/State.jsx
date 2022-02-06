import React, { Component } from 'react';
import { students } from './mock';

class State extends Component {
    constructor(props){
        super(props);
        this.state = {
           data: students,
           name: '',
           status: '',
           selected: {},
           option: 'id',
        }
    }
    render() {
        const onDelete =(id) =>{
            let res= this.state.data.filter((value)=> 
            value.id !==id);
            this.setState({data: res});
        };
        const onFilter = (e) =>{
            let res = students.filter(value=> 
            String(value[this.state.option]).toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({data: res})
        }
        const onChange = (e)=>{
            const {name, value} = e.target
            this.setState({[name]: value})
        }
        const onSave =()=>{
            const newUser = {id: this.state.data.length +1,
            name: this.state.name,
            status: this.state.status
            }
            this.setState({ data: [...this.state.data, newUser]})
        }
        const onSelect =(value)=>{
            this.setState({selected: value,  name: value.name, status: value.status})
        }
        const onUpdate =()=>{
            let res  = students.map((value)=> 
            value.id === this.state.selected.id? { ...value,name: this.state.name, status: this.state.status}:value );
            this.setState({data: res, selected: {} })
        }
        const onValueSelect =(e)=>{
          this.setState({option: e.target.value}) 
        }
        return (
            <div>
                <select name='' id='' onChange={onValueSelect}>
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                    <option value="status">Status</option>
                </select>
                <input type='text' onChange={onFilter}/>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value) => { 
                              return(
                               <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>
                                       {this.state.selected.id === value.id?(
                                           <input name = 'name'
                                           onChange={onChange} value={this.state.name} />
                                         ) : (
                                           value.name
                                         )} 
                                        </td>
                                    <td>
                                        {this.state.selected.id ===value.id?(
                                            <input name = 'status'
                                            onChange={onChange} value={this.state.status}></input>
                                        ) : (
                                        value.status)}
                                        </td>
                                    <td>
                                        <button onClick={() => onDelete(value.id)}>Delete</button>
                                        {
                                            this.state.selected.id ===value.id?<button onClick={onUpdate}>Update</button>
                                            :
                                            <button onClick={()=> onSelect(value)}>Edit</button>
                                        }
                                        
                                    </td>
                               </tr>
                            )})}
                    </tbody>
                </table>
                <input name='name' onChange={onChange } type="text" placeholder='name'/>
                <input name='status' onChange={onChange} type="text" placeholder='status'/>
                <button onClick={onSave}>Add</button>
            </div>
        );
    }
}

export default State;