import React from 'react';
import {get} from 'axios';
import './History.scss';
import Cookie from 'js-cookie';
import {Link} from 'react-router-dom';

export default class History extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            encodes : []
        }
    }

    componentDidMount(){
        get('/history')
            .then(res => {
                console.log(res.data);
                this.setState({
                    encodes : res.data
                });
            });
    }

    render(){
        let uid = Cookie.get('_uid');
        return (
            <div className="encodes">
                <h2>
                    Encode History
                </h2>
                {this.state.encodes.map(encode => {
                    return (
                        <div key={encode} className="encode">
                            {encode.substring(encode.indexOf('_') + 1)}

                            <a href={'/encoded/' + uid + '/' + encode}
                               className="download"
                               download>
                                Download
                            </a>
                            <Link
                                to={`/view/${encode}`}
                                className='view'>
                                View
                            </Link>
                        </div>
                    )
                })}

                {!this.state.encodes.length && (
                    <div className="message">
                        No Encodes Found
                    </div>
                )}
            </div>
        )
    }
}