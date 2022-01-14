import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                <img src="https://picsum.photos/1500/400" />
            </div>
            <div class="news">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;