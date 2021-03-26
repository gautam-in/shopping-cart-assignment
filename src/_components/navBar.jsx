import React from 'react';
import { Link } from 'react-router-dom';

export class NaveBar extends React.Component {

    render() {
        return (
            <div>
            <ul>
              {/* <a onClick={() => history.push('page1') }>Page 1</a>
              <a onClick={() => history.push('page2') }>Page 2</a> */}
              <Link to="/page1" className="home">Paqge1</Link>
              <Link to="/page2" className="home">Page2</Link>

            </ul>
          </div>
        );
    }
}

