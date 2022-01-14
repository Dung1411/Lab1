import ActivateList from "../components/activate-list";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewListHome from "../components/listHome";

/* eslint-disable linebreak-style */
const HomePage = {
    runder() {
        return /* html */`
       <div class="container mx-auto"> 
            <header> ${Header.runder()}  </header>
            <div class="mt-4"> 
                ${Banner.runder()}
                </div>
                <div class="new" > 
                ${NewListHome.runder()}
                </div>
                <div class="activate">
                ${ActivateList.runder()}
            
            </div>
            <footer> ${Footer.runder()} </footer>
       </div>
        `;
    },
};
export default HomePage;