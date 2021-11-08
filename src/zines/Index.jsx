import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import ZineCreate from './ZineCreate';

export const Index = (props) => {
    const [ zine, setZine ] = useState([]);

    const fetchZines = () => {
        fetch('http://localhost:3000/zine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: props.token,
            }),
        })
            .then((res) => res.json())
            .then((zineData) => {
                setZine(zineData);
                console.log(zineData);
            });
    };

    useEffect(() => {
        fetchZines();
    }, []);


    return(
        <div>
            <Row>
            <p>Hello from Zines index</p>
                <Col md='3'>   
                    <ZineCreate fetchZines={fetchZines} token={props.token} />
                </Col>
                <Col md='9'>
                    <h2>Add a Zine to see a table</h2>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </div>
    )
}