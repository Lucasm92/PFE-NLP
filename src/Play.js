import React from 'react';
import BarChart from './components/Barchart';


import './App.css'
import { Col, Row } from 'react-bootstrap';

const Play = () => {
    
    return (

        
        <div class="jumbotron-fluid text-dark   rounded">

            <div class="container-fluid">
                <h1 class="display-4">Play</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <Row>
                    <Col>
                    <div class="container-fluid shadow-lg m-4 bg-light">
                        <BarChart/>
                    </div>
                    </Col>

                    <Col>
                    <div class="card text-center m-4">
                    <div class="card-header">
                        x Playlist dispo
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Menu navig playlist</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/b" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                    </div>
                    </Col>
                    
                </Row>
                
            </div>
        </div>
             

        
        );
    };
    
    export default Play;

    