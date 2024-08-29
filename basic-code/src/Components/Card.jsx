
import './Card.css'
import like from '../assets/like.jpg';
// import like1 from './03.png';
import { useState } from 'react';


function Card({Img,Description,like,comment}) {
  const [count ,setCount ]=useState(0);
  const [color ,setcolr ]=useState("#797979");
  const [islike ,setIsLike ]=useState(false);
  // function like(){
  //   setCount(count+1)
  //   setIsLike(!islike)
  //   setcolr("red")
   
  // }
  function likehandle(){
    setIsLike(!islike)
    setcolr("red")
    setCount(count+1)
  }
   
    return (
      <>
          
            <div className="box">
              {/* Box 1 */}
              <div className="box1">
                <div className="box1-img1"> <img src={Img}/></div>
                <div className="box1-text1">{Description}</div>
                <hr />
                <div className="box1-icon1">
                  <div className="box1-title1">
                    <p className="txt">Ramesh </p>
                    <p><span>Jan 10,2022</span></p>
                  </div>
                  <div className="like">
                    <div className="like1" onClick={likehandle} >
                    {/* <i class="fa-solid fa-heart"></i>{count } */}
                    {islike?<i class="fa-solid fa-heart" style={{color:color}} >{count}</i>:<i class="fa-regular fa-heart"></i>}
                    
                    </div>
                    <div className="like1" >
                    <i class="fa-solid fa-comment"></i>{comment}
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
          
      </>
    );
  }
  
  export default Card;
  