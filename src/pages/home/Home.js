import React, { Component } from 'react';
import './Home.scss';
import Button from '../../components/button/Button.js';

class Home extends Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <div id="hero" className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>Let's put your knowledge and skills to the test?</h1>
                            <Button size="lg" color="primary" text="Yes!"/>
                            <Button size="lg" color="secondary-1" text="Yes!"/>
                            <Button size="lg" color="secondary-2" text="Yes!"/>
                            <Button size="lg" color="complement" text="Yes!"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;