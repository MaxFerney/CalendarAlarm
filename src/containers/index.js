import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Explore from "../components/explore"; //imports the feature's entry component.
import { navigateToLogin } from "navigation/actions"; //imports navigation action to be used by feature
import { getExploreData } from "../actions"; // imports action creators as needed.
import { getCategoryListing } from "../selectors"; // imports selectors as needed.

const mapStateToProps = state => ({
  exploreData: state.exploreData,
  categoryListing: getCategoryListing(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getExploreData
    },
    dispatch
  );

// Connects the entry-component and makes it the default export.
export default connect(mapStateToProps, mapDispatchToProps)(Explore);
