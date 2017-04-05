import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { receivePuppies, AsyncReceivePuppies } from './action-creators';

const hardCodedData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const mapStateToProps = (state) => {
    return {
       allPuppies: state.allPuppies
    }
}
//load our hardcodedPuppies onto our state when the AllPuppies component mounts in reducer.js

const mapDispatchToProps = (dispatch) => {
    return {
            onLoadPuppies: () => { dispatch(
                AsyncReceivePuppies(hardCodedData) //pass action to dispatch and sends action to reducer
            )
        }
    }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
const AllPuppiesContainer = componentCreator(AllPuppies);

export default AllPuppiesContainer;
