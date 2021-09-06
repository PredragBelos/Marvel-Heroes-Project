import React from "react";
import "./singleCharacterPage.css";

export const singleCharacterPage = () => {

    // ovde radim state 

    return (

        <div className="singleCharacter">

            <div className="title">

                <div className="logo">

                    <img src="https://cdn.mos.cms.futurecdn.net/efff113e0e58bc75745b6d0784eb5fd5-320-80.jpg" alt="marvel" />

                    <p className="par">Marvel Heroes</p>

                </div>

                <div className="hPage">

                    <p>Homepage</p>

                </div>

            </div>

            <div className="main">

                <div className="heroImage">

                    <img src="https://assets1.ignimgs.com/2013/11/06/thor1106131280jpg-e9627f_1280w.jpg" alt="thor" />
                
                </div>

                <div className="heroDescription">

                    <h1>Thor</h1>

                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                </div>

            </div>

        </div>
    )
}