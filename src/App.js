import "./App.css";

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
        <div className="showItem">
          <div className="showItem-poster">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
          </div>
          <div className="showItem-info">
            <h3>Game of Throne</h3>
            <p>2011-04-17</p>
            <button>Preview</button>
          </div>
        </div>
        <div className="showItem">
          <div className="showItem-poster">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
          </div>
          <div className="showItem-info">
            <h3>Game of Throne</h3>
            <p>2011-04-17</p>
            <button>Preview</button>
          </div>
        </div>
        <div className="showItem">
          <div className="showItem-poster">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
          </div>
          <div className="showItem-info">
            <h3>Game of Throne</h3>
            <p>2011-04-17</p>
            <button>Preview</button>
          </div>
        </div>
        <div className="showItem">
          <div className="showItem-poster">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
          </div>
          <div className="showItem-info">
            <h3>Game of Throne</h3>
            <p>2011-04-17</p>
            <button>Preview</button>
          </div>
        </div>
        <div className="showItem">
          <div className="showItem-poster">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
          </div>
          <div className="showItem-info">
            <h3>Game of Throne</h3>
            <p>2011-04-17</p>
            <button>Preview</button>
          </div>
        </div>
        <div className="showItem">
          <div className="showItem-poster">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
          </div>
          <div className="showItem-info">
            <h3>Game of Throne</h3>
            <p>2011-04-17</p>
            <button>Preview</button>
          </div>
        </div>
        <div className="showItem">
          <div className="showItem-poster">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
          </div>
          <div className="showItem-info">
            <h3>Game of Throne</h3>
            <p>2011-04-17</p>
            <button>Preview</button>
          </div>
        </div>
      </div>
      <div className="showSummary">Dizi Özeti </div>
      <div className="favList">
        <h2>Favori Listesi</h2>
      </div>
    </div>
  );
}

export default App;
