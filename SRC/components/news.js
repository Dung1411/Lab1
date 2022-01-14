import data from "../data";

const News = {
    render() {
        return /* html */`
        <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Tin tức học tập</h2>
        <div class="news">
            <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                                <div class="news-item border p-4">
                                    <div class="news-img">
                                        <a href="/news/${post.id}">
                                            <img src="${post.img}" />
                                        </a>
                                    </div>
                                    <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                                    <p class="text-sm text-gray-600">${post.desc}</p>
                                </div>
                        `).join("")}
            </div>
        </div>`;
    },
};
export default News;