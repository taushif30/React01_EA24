import React ,{Component} from 'react';
import './Style.css'

class ClassCompo extends Component{
    render(){
        return(
        <div className='box2'>
      <h1>This is created using Functional Component</h1>
      <p>This is done by External Css</p>
      <p style={{color:'blue'}}>This is done using Inline Css</p>

      

        </div>
        )
    }
}

export default ClassCompo