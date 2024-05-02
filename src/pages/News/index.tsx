import Tabbars from "../../components/Tabbar";

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <h3 className="center"> News页面</h3>
        <p>欢迎来到新闻页</p>
      </div>

      <Tabbars activeValue={1} />
    </div>
  );
};

export default News;
