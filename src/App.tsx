import { ArrowDown } from 'phosphor-react'
import TweetEmbed from 'react-tweet-embed'

import './styles/global.scss'
import './styles/home.scss'


import youkoso from './assets/youkoso.png';
import a from './assets/class.jpg';
import koji from './assets/ayanokei.jpeg'
import indique from './assets/indique.jpeg'
import burger from './assets/burger.png'

export default function App() {
  return(
    <div>
      <header>
        <div className="routes">
        <div className="image">
          <img src={youkoso} className="cote" alt="logo"/>
        </div>

        <div className="nav">

          

          <nav>
          <img src={burger} className="burger"/>
            <ul>  
              <li><a href="#">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#apoiadores">Apoiadores</a></li>
              <li><a href="#">Equipe</a></li>  
              
            </ul>
          </nav>
        </div>
        </div>
      </header>

      <main>

        <section id="#home">

       <div className="classe">
          <div className="box">
          <a href='#sobre'><button  className='button'>CONHEÇA O PROJETO <ArrowDown/>  </button></a>

          </div>
       </div>

       
       </section>
      </main>

      <footer>
        <section id="sobre">
        <h1 className='title1'>Light Novel No Brasil</h1>
        <p className='p1'>Nossa campanha tem o intúito de fazer com que as editoras brasileiras
          tragam a Light novel da obra Classroom of The Elite para o Brasil, podendo assim <br></br>
          ganhar mais visibilidade em nosso país além do fato de termos uma continuação
          oficial.
        </p>

        <iframe width="1000" height="480" src="https://www.youtube.com/embed/1dAtxHzNvXg" title="CONVOCAÇÃO: Vamos Trazer Classroom Of The Elite para o BRASIL! | Veja como" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h1 className='title2'>Como Ajudar?</h1>
        <h2 className='subtitle1'>Editoras</h2>
      
        <p className='p2'>
        <strong className='comunity'>A comunidade pode nos ajudar indicando a obra para as editoras : </strong>
        <br></br></p>

        <p className='editora1'>Editora NewPOP: <a href='http://bit.ly/falecomNewPOP'>http://bit.ly/falecomNewPOP</a> <br></br></p>
        <p className='editora2'>Editora JBC: <a href='http://editorajbc.com.br/indique/'>http://editorajbc.com.br/indique/</a> <br></br></p>
        <p className='editora3'>Editora MPEG: <a href='http://bit.ly/31dQToY'>http://bit.ly/31dQToY</a> </p> 



        <h2 className='subtitle2'>Você também pode nos seguir e subir a # no twitter!</h2>
        <img className='indique' src={indique}/>

        

        </section>

        <section id="apoiadores">
          <h1>Apoiadores </h1>

      
        </section>

      </footer>
    </div>
  )
}


