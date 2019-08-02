import React, { Component } from 'react';
import './Home.scss';
import Button from '../../components/button/Button.js';
import NotYetOverlay from '../../components/not-yet-overlay/NotYetOverlay.js';

class Home extends Component {
    state = {
        h1: [
            'Let\'s put your knowledge and skills to the test?',
            'What about now? Are you ready for a test?',
            'You should be ready by now for a test... Aren\'t you?',
            'C\'mon... Stop playing and put in the work!'
        ],
        h1Active: 0,
        notYet: false,
        notYetNumberDefault: 3,
        notYetNumber: 0
    }

    shotNotYet = () => {
        this.setState({
            notYet: !this.state.notYet,
            notYetNumber: this.state.notYetNumberDefault
        });

        const clock = setInterval(() => {
            if ( this.state.notYetNumber === 0 ) {
                this.setState({
                    notYet: !this.state.notYet,
                    h1Active: this.state.h1Active + 1 >= this.state.h1.length ? 0 : this.state.h1Active + 1
                });
                return clearInterval( clock );
            }
            this.setState({
                notYetNumber: this.state.notYetNumber - 1
            });
        }, 1000);
    }

    render() {
        return (
            <React.Fragment>
                <div id="hero" className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>{this.state.h1[this.state.h1Active]}</h1>
                            <Button size="lg" color="primary" text="Yes!"/>
                            <Button size="lg" color="secondary-1" text="Yes!"/>
                            <Button size="lg" color="secondary-2" text="Yes!"/>
                            <Button size="lg" color="complement" text="Yes!"/>
                            <div className="not-yet" onClick={this.shotNotYet}>Not yet...</div>
                        </div>
                    </div>
                </div>
                { this.state.notYet ===  true ? <NotYetOverlay number={this.state.notYetNumber} /> : null }
            </React.Fragment>
        );
    }
}

export default Home;
