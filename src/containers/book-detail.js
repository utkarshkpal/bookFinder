import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {

  render(state){

    if(!this.props.book){

      return <div>Select a book to get started.</div>

    }
    return(

      <div>
        <div>
          Book detail
        </div>
        {this.props.book.title}
        <br />
        {this.props.book.author}
      </div>

    );
  }
}

function mapStateToProps(state){
  //whatever is returned from here will be shown as as props inside of bookList.;
  return {

     book:state.activeBook

  };
}

//promote BookList Component to a container, it needs to know about this new dispatch method ,selectBook.
export default connect(mapStateToProps)(BookDetail);
