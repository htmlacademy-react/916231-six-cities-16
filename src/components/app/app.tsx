import MainPage from '../../pages/main-page/main-page';
import {OFFERS} from '../../data';

function App(): JSX.Element {
  return (
    <MainPage
      offers={OFFERS}
    />
  );
}

export default App;
