import React from "react";
import { connect } from "react-redux";

const SearchMessage = (props) => {
    function renderMessage (search, matches) {
        const classes = "col-12 col-md-6 mt-3 paragraph text-center";
        if (search.length > 0 && matches.length > 0) {
            if (matches.length > 1) {
                return <p className={classes}>Showing {matches.length} results for "{search}"</p>
            } else if (matches.length == 1) {
                return <p className={classes}>Showing {matches.length} result for "{search}"</p>
            }
        } else if (search.length > 0 && matches.length == 0) {
            return <p className={classes}>There were no matches for "{search}", try searching for something else.</p>
        }
    }
    return (
        <div className="row d-flex justify-content-center">{renderMessage(props.search, props.matches)}</div>
    );
}


const mapStateToProps = state => {
    return {
      search: state.searchObject.search,
      matches: state.searchObject.matches
    };
  };
  
  export default connect(mapStateToProps)(SearchMessage);