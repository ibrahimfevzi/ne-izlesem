import "./App.css";
import ShowItem from "./components/ShowItem";

/*
-boş react uygulaması oluşturacağız done
- reset.css kullanacağız. done
- işlevsiz statik jsx sayfaları oluşturacağız done
-* {
  border: 1px solid limegreen;
}
- layout oluşturacağız done
- React Router ile sayfalar arası geçiş yapacağız.
- kendini tekrar eden şeyleri componentlere ayıracağız.
- componentlerin içindeki verileri state ile yöneteceğiz.
- state değiştiğinde componentlerin yeniden render edilmesini sağlayacağız.
- componentler arası veri aktarımı için props kullanacağız.
- dizi listesini almak için axios kullanacağız.
- filtreleme (türe göre, yıla göre, yere göre)


*/

function App() {
  return (
    <div className="mainBox">
      <div className="showList">
        <h2>Dizi Listesi</h2>
        <ShowItem
          poster="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
          title="Game of Throne"
          date="2011-04-17"
        />
        <ShowItem
          poster="https://static.episodate.com/images/tv-show/thumbnail/29560.jpg"
          title="Arrow"
          date="2012-10-10"
        />
      </div>
      <div className="showSummary">Dizi Özeti </div>
      <div className="favList">
        <h2>Favori Listesi</h2>
      </div>
    </div>
  );
}

export default App;
