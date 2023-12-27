//Core packages
import { createSignal, createEffect, createResource } from "solid-js";

//Components
import SnsSearchAndData from "./viewComponents/SnsSearchAndData.jsx";
import SnPreviousSearches from "./viewComponents/SnPreviousSearches.jsx";
//import Masonry from "react-responsive-masonry";

// ----> DOCS: https://github.com/paulcollett/react-masonry-css <----
import Masonry from 'react-masonry-css'

//can't make it work.. css?

//compiler bypass
/*class TranspiledMasonry extends Masonry {
  constructor() {
    super();
  }
}*/

/*haters gonna hate inline css*/
/*.my-masonry-grid {
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  margin-left: -30px; 
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; 
  background-clip: padding-box;
}
*/

/* Style your items */
//.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
//  background: grey;
//  margin-bottom: 30px;
//}
/* end of hate*/

//params:  breakpointCols={3},  className="my-masonry-grid",  columnClassName="my-masonry-grid_column"
//clonacion

//to whoever is reading this, please remember to add more comments in the code...
const masoneria = new Masonry(3, 'my-masonry-grid', 'my-masonry-grid_column');

function MainView() {
  const [showScreen, setShowScreen] = createSignal(false);
  

  const previousSearchesData = () => {
    const previousSearchesInfo = previousSearches.loading
      ? {}
      : previousSearches();
    return previousSearchesInfo;
  };


  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>

      <main class={`sb ${ showScreen() ? "actived" : "" }`}>
        <section class="left">
        <masoneria>
          {/* cadena */<SnsSearchAndData /> }
          
        </masoneria>
        </section>
        <section class="right">
          <SnPreviousSearches />
        </section>
      </main>
    </>
  );
}

export default MainView;
