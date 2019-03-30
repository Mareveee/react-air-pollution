import React from 'react';
import Paginations from './Paginations';
 
class Before extends React.Component {
    constructor() {
        super();
        var t = 15
 
        // an example array of 150 items to be paged
        var exampleItems = [...Array(t).keys()].map(i => ({ id: (i+1)}));
 
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
 
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
 
    render() {
        console.log(typeof this.props.item)
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.id - 1}</div>
                        )}
                        <Paginations items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Before;