import React, { Component } from 'react';
import './Tutorials.css';
import axios from'axios';

export default class Tutorials extends Component {
    constructor() {
        super();
        this.state = {
            tutorials: []
        }
    }
    componentDidMount() {
        axios.get('/api/tutorials').then(res => {
            this.setState({tutorials: res.data.tutorials});
        }).catch(err => console.log('Get Tutorials Error-----------', err));
    }
    render() {
        const { tutorials } = this.state;
        return (
            <div>
                {tutorials && tutorials.length && tutorials.map(tutorial => <div>
                                                                                <h2>{tutorial.title}</h2>
                                                                                {tutorial.links.length 
                                                                                && tutorial.links.map(link => <p onClick={() => this.linkFunc(link)}>{link}</p>)}
                                                                            </div>)}
            </div>
        );
    }
}