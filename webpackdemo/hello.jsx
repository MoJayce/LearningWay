import React,{Component} from 'React';
import Test from './test.jsx'

export default class Hello extends Component{
    render(){
        return(
            <div>
                <h1>你好 webpack 真牛逼</h1>
                <Test />
            </div>
        )
    }
}