import React from 'react';
import { Link } from 'react-router';

export default class AllPuppies extends React.Component {

  // componentDidMount(){
  //   this.props.onLoadPuppies()
  // }

  render () {
     //{ console.log(this.props.allPuppies) }
    return (
      <div>
        <ul className="list-unstyled">
        { this.props.allPuppies.map( (pup) => {
            return <li key={`${pup.id}`}><Link to={`puppies/${pup.id}`}>{ pup.name }</Link></li>
          })
        }
        </ul>
      </div>
    )
  }
}

// export default (props) => {
//     return (
//       <div>
//         <ul className="list-unstyled">
//            <li><a href="#">PUPPY</a></li>
//         </ul>
//       </div>
//     )
//   }
