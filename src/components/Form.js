import React from 'react';

class Form extends React.Component {

    addCurrency(event) {
		event.preventDefault();
        if (this.props.addRate(this.name.value) === 'error') {
            alert('Currency not found');
        }   
        this.ratesForm.reset();   
    }

    render() {
        return (
            <div>
                <form ref={(input) => this.ratesForm = input} onSubmit={(e) => this.addCurrency(e)} className="form-inline">
                    <div className="form-group">
                        <input className="form-control" ref={(input) => this.name = input} type="text" placeholder="Add More Currency" />
                    </div>  
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-sm">+ Add</button>      
                    </div>            
                </form>
            </div>
        );
    }
}

export default Form;