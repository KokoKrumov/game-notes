import React, {Component} from 'react';
import styled from "styled-components";


function CardServiceConcepts(props) {
    function cardPatch() {
        return (
            <div className='
                    absolute
                    right-0
                    left-0
                    top-0
                    bg-firefly
                    z-10
                    mx-0.5
                    '/>
        )
    }

    return (
        <div className='w-180 m-auto h-96/8 overflow-hidden pt-1'>
            <CardServiceBgStyled
                className='
                relative
                rounded-lg
                bg-no-repeat
                bg-100%
                bg-bottom
                bg-blend-multiply
                duration-300
                transition-all
                flex
                items-end
                '
                style={{
                  backgroundImage: `${props.serviceImage}`,
                  height: '26.75rem',
                  width: '636px'
                }}
            >

                <CardServiceBorder>                    
                    <div className={'absolute duration-300 transition-all transform bottom-8 bg-black py-4 px-8'}>                        
                        <p className='text-silver card-service-text duration-300 transition-all block w-full h-auto h-6/8 pt-6 overflow-hidden mb-2'>
                          <div className="mb-2">    
                            <svg className="inline-block separator absolute duration-300 transition-all mr-2 mb-1.5" xmlns="http://www.w3.org/2000/svg" width="19.613" height="10.09" viewBox="0 0 19.613 10.09">
                              <path id="top_bgr" d="M-15-.046l17.652,0L4.613,10.044H-13.039Z" transform="translate(15 0.046)" fill="#f60"/>
                            </svg> 
                            <span className="text-white text-services duration-300 transition-all absolute ml-8 -mt-6 uppercase font-bold">
                              <span className="text-blaze-orange">{props.title}</span>
                              <span>{props.titleWhite}</span>                              
                            </span>
                            <div className="absolute separatorFromRight right-6 top-3/8 transition-all duration-300 opacity-0">
                              <svg className="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="19.613" height="10.09" viewBox="0 0 19.613 10.09">
                                <path id="top_bgr" d="M-15-.046l17.652,0L4.613,10.044H-13.039Z" transform="translate(15 0.046)" fill="#666666"/>
                              </svg>
                              <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="19.613" height="10.09" viewBox="0 0 19.613 10.09">
                                <path id="top_bgr" d="M-15-.046l17.652,0L4.613,10.044H-13.039Z" transform="translate(15 0.046)" fill="#333333"/>
                              </svg>
                            </div>
                          </div>
                          <span className="">
                            {props.serviceDesc}
                          </span>                          
                        </p>
                        <CardServiceReadAll className={''}>       
                          <div className='card-service__btn-readAll duration-300 transition-all w-full text-blaze-orange uppercase font-bold m-4 ml-0 fill-current bottom-4 z-10 transform'>
                            <hr className="border-tundora" />                     
                            <span class="text-blaze-orange uppercase font-bold mt-1 block relatiive mt-2 -mb-3">Read All</span>                  
                          </div>
                        </CardServiceReadAll>
                    </div>                    
                </CardServiceBorder>
            </CardServiceBgStyled>
        </div>
    );
}

const CardServiceReadAll = styled.div`
 
  
`


const CardServiceBgStyled = styled.div`
  .separator {
    margin-top: -18px;
  }

  & .card-game-title-image__wrap {
    width:  20.3125rem;
    height:  6.25rem;
    
  }
  
  &:hover .card-service__btn-readAll {
    position: relative;
    height:0;
    bottom: -40px;
    opacity: 0;
    transition: all 1s;
  }

  &:hover .separator  {
    margin-left: 91px;
    position: absolute;
    transition: margin-left 0.6s;
  }

  &:hover .text-services  {
    margin-left: 0;
    position: absolute;
    transition: margin-left 0.6s;
  }

  &:hover .separatorFromRight  {
    opacity: 1;
    position: absolute;
    transition: margin-right 0.6s;
    margin-right: 422px;
  }
  
  
  &:hover {
    background-position-y: -10.5rem;   
    transition: all 0.6s;
  }
  &:hover .card-service-text {
    height: 160px;
    overflow: inherit;
    color: #fff;
    transition: all 0.6s;
  }


`;

const CardServiceBorder = styled.div`
  font-size: 15px;
  line-height: 20px;
  width: 100%;

  &:after {
    overflow: hidden;
    display: block;
    content: url("/images/pages/Services/BigBorderThumb.png");
    position: absolute;
    top: -2px;
    left: -1px;
  }
`;


export default CardServiceConcepts;
