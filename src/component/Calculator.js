import React from 'react'
import { convert, toCelsious, toFarenhite } from '../lib/Converter';
import CanBoil from './CanBoil';
import { Temperature } from './Tempareture';

export class Calculator extends React.Component{
    state={temparature:'',scale:'c'}

    handleChnage=(e,scale)=>{
        this.setState({
            temparature:e.target.value,
            scale,
        })
    }
    render(){
        const {temparature,scale}=this.state;
        const celsious=scale==='f' ? convert(temparature,toCelsious) : temparature;
        const farnhite=scale==='c' ? convert(temparature,toFarenhite) : temparature;
        return(
            <div>
                <Temperature scale='c' tempature={celsious} handleChange={this.handleChnage}/>
                <Temperature scale='f' tempature={farnhite} handleChange={this.handleChnage}/>
                <CanBoil celsius={parseFloat(temparature)}/>
            </div>
        )
    }
};