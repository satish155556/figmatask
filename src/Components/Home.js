import React from 'react'
import {Carousel,Button} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom';


function Home() {
    let location = useLocation();

    let getData =()=>{
        if(location && location.state && location.state.email){
            return location.state.email
        }else{
            return "satish"
        }
    }
  return (
    <div>
<nav className='navagate'>
<Link to ='/tollywood'><Button variant="primary">Tollywood</Button></Link>
<Link to ='/bollywood'><Button variant="secondary">Bollywood</Button></Link>
<Link to ='/hollywood'><Button variant="success">Hollywood</Button></Link>
<Link to ='/'><Button variant="warning">Logout</Button></Link>
</nav>
<h1>Hi {getData} Welcome to Movieez </h1>
<div className='carousel'>
<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.apnlive.com/sortd-service/imaginary/v22-01/jpg/large/high?url=YXBuLW5ld3MtcHJvZC1zb3J0ZC9tZWRpYWVlYTJiZWIwLWFiNGMtMTFlYy04ZjIyLTUzMDUxZDFjYjQ0N3dlYnA="/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thetelugufilmnagar.com/wp-content/uploads/2022/03/Ramrao.png" alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.newstimes.com.ng/wp-content/uploads/2022/08/macherla-niyojakavargam-budget-box-office-collection-day-wise-is-genius-movie-3-hit-or-flop-62f0af8ccacea-1659940748-780x470.jpg"/>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/TFU4v_UPCk4/maxresdefault.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/RSMpMdoElSQ/hqdefault.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://3d-hd.club/uploads/posts/2021-06/1623500204_1623472327_1623047116_1621365305_snimok-10-5-1-1-1-4-1-2.png"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-preview.redd.it/XaP_xPl2aDCDuvw7FPNJzTueUUbsCfTHaY4cTXwV81g.jpg?auto=webp&s=ac0d167922ca40de3b6ed92e51019c95b50e0653"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://3.bp.blogspot.com/-BTtZFRO77cw/VEFLNoZlzlI/AAAAAAAABjk/UcF6C9fPcBk/s1600/Creature-3D-2014-Full-Hindi-Movie-Watch-Online.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://qqcdnpictest.mxplay.com/pic/fa88c7a6fc01815520e886aae96ec456/en/16x9/640x360/test_pic1617287744105.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.songsuno.com/movie-images/original/movie/welcome-to-new-york/welcome-to-new-york-poster.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blu-ray.world/uploads/posts/2019-08/medium/1565281029_1565035823_avengers-endgame-4k-2019-ultra-hd-2160p-new-release-4k-movies-poster.png"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blu-ray.world/uploads/posts/2017-10/medium/1508667786_1234eq.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.slashfilm.com/img/gallery/the-best-and-worst-3-d-moments-in-sci-fi-movie-history/intro-1654868161.jpg"/>
      </Carousel.Item>
    </Carousel>
    </div>
    
    </div>
  )
}

export default Home