import React from 'react';

class List extends React.Component {
    numberLocal(no) {
        return no.toLocaleString('us-US');
    }
    render() {
        const results = this.props.results;
        const listItem = Object.keys(results).map( (key) => {
            if (!results[key]) {
                return ('');
            }
            return (
                <div className="card" key={key}>  
                    <div className="card-body"> 
                        <div className="row">
                        <div className="col-md-10">
                            <h3> {key} <span className="float-right">{this.numberLocal(results[key])}</span> </h3>
                            <p>
                                1 {key} = {this.numberLocal(results[key])}
                            </p>
                        </div>
                        <div className="col-md-2">
                            ( <button onClick={() => this.props.remove(key)} >X</button> )
                        </div>
                        </div>
                    </div> 
                </div>
            );
        } );
        return (
            <div>
                {listItem}
            </div>
        );
    }
}

export default List;