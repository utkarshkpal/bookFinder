import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

//in a container dont export the component
class BookList extends Component {

  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
          onClick={()=>{this.props.selectBook(book);}}
          key={book.title}
          className="list-group-item">{ book.title } </li>
      )
    });
  }

  render(){

    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );

  }
}

//whatever is returned from here will be shown as as props inside of bookList.;
function mapDispatchToProps(dispatch){

  //whenever selectbook is called,the result should be passed to all of the reducers.
  return bindActionCreators({selectBook:selectBook},dispatch);

}

function mapStateToProps(state){
  //whatever is returned from here will be shown as as props inside of bookList.;
  return {

     books:state.books
     
  };
}

//promote BookList Component to a container, it needs to know about this new dispatch method ,selectBook.
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
