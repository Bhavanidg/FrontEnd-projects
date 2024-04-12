import ModalTest from "./Components/Custom_model_popup/model-test";
import Accordian from "./Components/accordian";
import RandomColor from "./Components/random-color";
import TabTest from "./Components/custom-tabs/tab-test";
import FeatureFlags from "./Components/feature-flag";
import GithubProfileFinder from "./Components/github-profile-finder";
import ImageSlider from "./Components/image-slider";
import LoadMoreData from "./Components/load-more-data";
import menus from "./Components/tree-view/data";
import QRCodeGenerator from "./Components/qr-code-generator";
import ScrollIndicator from "./Components/scroll-indicator";
import ScrollToTopAndBottom from "./Components/scroll-to-top-and-bottom";
import LightDarkMode from "./Components/light-dark-mode";
import SearchAutocomplete from "./Components/search-autocomplete-with-api";
import StarRating from "./Components/star-rating";
import TicTacToe from "./Components/tic-tact-toe";
import TreeView from "./Components/tree-view";
import UseFetchHookTest from "./Components/use-fetch/test";
import UseOnclickOutsideTest from "./Components/use-outside-click/test";
import UseWindowResizeTest from "./Components/use-window-resize/test";
function App() {
  return (
    <div>
     {/*<Accordian/>*/}
     {/*<ModalTest/>*/}
     {/*<RandomColor/>*/}
     {/*<TabTest/>*/}
      {/*<FeatureFlags/>*/}
     {/*<GithubProfileFinder/>*/}
      {/*<ImageSlider/>*/}
      {/*<LoadMoreData/>*/}
     {/*<QRCodeGenerator/>*/}
      {/*<ScrollIndicator/>*/}
      {/*ScrollToTopAndBottom/>*/}
     {/*<LightDarkMode/>*/} 
     {/*<SearchAutocomplete/>*/} 
     {/*<StarRating/>*/}
     {/*<TicTacToe/>*/}
     {/*<TreeView menus={menus} />*/}
     <UseFetchHookTest/>
     {/*<UseOnclickOutsideTest/>*/}
     {/*<UseWindowResizeTest/>*/}
     
    </div>
  );
}

export default App;