import MyComp from 'containers/mycom'
import {connect} from 'react-redux';

@connect((state,props)=>{
    return {
        fileName:state.index
    }
})
export default class Main extends React.Component {
    funk1=()=>{
        console.log(this);
    }
    render () {
        return (
            <div>
                <MyComp click={this.funk1}/>
                  kurwa

                {this.props.fileName}
            </div>
        )
    }
}