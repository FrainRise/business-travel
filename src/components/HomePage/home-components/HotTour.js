import React from 'react'

import './HotTour.scss'
import shipsImg from '../../../assets/homepage/ships.png'

export default class HotTour extends React.Component {
    render(){
        return(
            <div className="hotTour-section">
                 <div className="row custom-row">
                    <div className="col img-col">
                        <img src={shipsImg} alt="article" />
                    </div>
                    <div className="col text-col">
                        <p className="hotTour-title">
                            Next Tour
                        </p>
                        <h3 className="article-title">
                            Unforgettable adventure in Filipinas
                        </h3>
                        <p className="article-descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Ac turpis egestas integer eget.
                            Felis bibendum ut tristique et egestas quis ipsu. 
                        </p>
                        <p className="article-descr">
                            sa massa ultricies mi quis hendrerit dolor magna. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. 
                            Lectus arcu bibendum at varius. In massa tempor nec feugiat nisl. Mattis ullamcorper velit sed ullamcorper 
                            morbi tincidunt ornare massa eget. Adipiscing elit ut aliquam purus. Nunc pulvinar sapien et ligula ullam
                        </p>
                        <p className="article-descr">
                            Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Mauris rhoncus aenean vel elit scelerisque mauris. 
                            Pretium vulputate sapien nec sagittis aliquam malesuada. Lectus magna fringilla urna porttitor rhoncus dolor purus. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}