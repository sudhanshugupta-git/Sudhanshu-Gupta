
import "./assets/styles.scss";
import Header from "./header";
import Footer from "./footer";
// import UserTable from './userTable'
import FilmPage from "./pages/FilmPage";
import { FilmProvider } from "./context/filmContext";
 
function App() {
  return (
    <>
      <Header />
      <div className="main_page_holder">
        <div className="table_outer_holder">
          {/* <UserTable /> */}
          <FilmProvider>
            <FilmPage />
          </FilmProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
