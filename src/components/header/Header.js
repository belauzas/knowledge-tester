import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    state = {

    }

    render() {
        return (
            <div id="main_header" className="container">
                <div className="row">
                    <header className="col-12">
                        <div className="logo">Knowledge tester</div>
                        <nav>
                            { this.props.pages.map( page => 
                                <div className={ this.props.activePage === page.id ? 'active' : '' }
                                    key={page.id}
                                    onClick={() => {this.props.switchPage(page.id)}}>{page.name}</div> ) }
                        </nav>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;