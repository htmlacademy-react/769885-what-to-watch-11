import MainScreen from '../../pages/main/main-screen';

type AppDataFilmsPromoProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppDataFilmsPromoProps): JSX.Element {
  return (
    <MainScreen
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;
