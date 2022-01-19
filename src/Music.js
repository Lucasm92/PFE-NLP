import React from 'react';
import BarChart from './components/Barchart';


import './App.css'
import { Col, Row } from 'react-bootstrap';

const Music = () => {
    
    return (

        
        <div class="jumbotron-fluid text-dark   rounded">

            <div class="container-fluid">
                <h1 class="display-4">Playlist</h1>
                <p class="lead">Choisis ta playlist</p>
                <Row>
                    <Col>
                    <div class="card text-center m-4">
                    <div class="card-body">
                        <h5 class="card-title">Amour & Reve</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/b" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                        X chansons dispo
                    </div>
                    </div>
                    </Col>

                    <Col>
                    <div class="card text-center m-4">

                    <div class="card-body">
                        <h5 class="card-title">Passer à l'action</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/b" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                    X chansons dispo
                    </div>
                    </div>
                    </Col>

                    <Col>
                    <div class="card text-center m-4">

                    <div class="card-body">
                        <h5 class="card-title">Coup de gueule</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/b" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                    X chansons dispo
                    </div>
                    </div>
                    </Col>
                    
                </Row>
                
            </div>
        </div>
             

        
        );
    };
    
    export default Music;