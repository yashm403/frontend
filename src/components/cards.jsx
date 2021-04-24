import React, { Component } from 'react';
import Card from './maincomponent';

class Cards extends Component{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-2'>
                        <Card/>
                    </div>
                    <div className='col-md-2'>
                        <Card/>
                    </div>
                    <div className='col-md-2'>
                        <Card/>
                    </div>
                    <div className='col-md-2'>
                        <Card/>
                    </div>
                    <div className='col-md-2'>
                        <Card/>
                    </div>
                    <div className='col-md-2'>
                        <Card/>
                    </div>
                    <div className='col-md-2'>
                        <Card/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;