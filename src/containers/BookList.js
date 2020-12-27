import React from 'react'
import {connect} from 'react-redux';

import {bindActionCreators} from "redux";
import {selectBook} from "../actions/index";

class BookList extends React.Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <div>
                    <li
                        key={book.title}
                        onClick={()=>{this.props.selectBook(book)}}
                        className="list-group-item">
                        {book.title}
                    </li>
                </div>

            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props inside of book list.
    return {
        books: state.books
    }
}

//  anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
// whenever selectBook is called ,the result should be passed all over our reducers.
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// promote booklist  from a component to a container  -- it needs to know about this new dispatch method , SelectBook.
// Make it available as a props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
