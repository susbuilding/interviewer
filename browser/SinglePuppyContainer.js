import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = (state) => {

    return {
        selectedPuppy: state.selectedPuppy
    }
}

const componentCreator = connect(mapStateToProps)
const AllPuppiesContainer = componentCreator(SinglePuppy);

export default AllPuppiesContainer;

//export default connect(mapStateToProps)(SinglePuppy)
