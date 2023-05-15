import React from 'react';
import Page from './Page';

let globalParentTigger;

class Pagination extends React.Component {

    noPages;
    triggerParentChange;

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.noPages = this.props.noPages;
        this.triggerParentChange = this.props.triggerChangePage;
        globalParentTigger = this.triggerParentChange;
        
    }

    clickedLiFromChild = function(pageNumber) {
        console.log('clicked li from child with ' + pageNumber);
        // console.log('triggerParentChange', this.triggerParentChange);
        // console.log(globalParentTigger);
        globalParentTigger(pageNumber);
    }

    render() {
        console.log('Pagination rerenders');
        let pages = [];
        console.log(this.props.noPages);
        for (let i = 0; i < this.props.noPages; i++) {
            console.log('pushing page ' + i);
            pages.push(<Page pageNumber={i} clickedLiChild={this.clickedLiFromChild} />);
        }
        console.log(pages);
        return <div>
            <h3>Pagination ({this.props.noPages} pages)</h3>
            <ul>
                {pages}
            </ul>
        </div>;
    }
}

export default Pagination;
