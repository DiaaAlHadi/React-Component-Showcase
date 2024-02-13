import logo from './logo.svg';
import './App.css';
import Accordion from './component/accordion'
import RandomColor from './component/random-color'
import RatingStars from './component/rating-stars'
import ImageSlider from './component/image-slider'
import LoadMoreData from './component/load-more-data'
import TreeView from './component/tree-view'
import menus from './component/tree-view/data'
import QRCodeGenerator from './component/qr-code-generator'
function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <RatingStars noOfStars={10} />
      <ImageSlider url="https://picsum.photos/v2/list" limit={"10"} page={"1"}/>
      <LoadMoreData />
      <TreeView menus={menus}/>
      <QRCodeGenerator/>
    </>
  );
}

export default App;
