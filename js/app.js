// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()



    var PageView = React.createClass({
    	render: function(){
    		return(
	    		<div className="pageContainer">
	    			<img className="skyline" src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
	    			<img className="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
                    <LeftColView/>
                    <LeftSearch></LeftSearch>
                    <TextHeadline></TextHeadline>
                    <SubscribeBox></SubscribeBox>
	    		</div>
    		)
    	}
    })



    var LeftColView = React.createClass({
    	render:function(){
    		return(
    			<div className="leftContainer">
    				<p className="tiyTitle">The Iron Yard | HOUSTON</p>
    				<p className="leftText">Happenings and updates from The Iron Yard in Houston, TX</p>

    			</div>
    			)
    	}
    })

    var LeftSearch = React.createClass({
    	render: function(){
    		return(
    			<div className="leftSearchBar">
    				<p className="searchTitle">SEARCH</p>
    				<input type="text" placeholder="Search Keywords"/>
    			</div>
    			)
    	}
    })

    var TextHeadline = React.createClass({
    	render:function(){
    		return(
    			<div className="MainContentContainer">
                    <p className="headline">September 22 Starts a New Class of The Iron Yard Houston Students</p>
                    <p className="byLine">By Brian Dorton, Campus Director at The Iron Yard Houston</p>
                    <img className="classRoomPic" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
                    <p className="mainText">
                        Lemon drops dragée cake apple pie. Croissant pastry I love cupcake donut I love. Topping macaroon powder gingerbread pudding I love. Croissant pudding danish apple pie I love. Lemon drops fruitcake macaroon croissant sweet roll sweet roll. Tootsie roll marshmallow tiramisu lollipop cake. Lollipop halvah pie candy macaroon.
                        Macaroon cake cupcake cheesecake cookie. I love donut cake brownie toffee sugar plum bonbon. Sugar plum toffee bonbon donut fruitcake I love lemon drops ice cream muffin. Cheesecake I love candy canes gummi bears pastry candy canes. Halvah chocolate bar cotton candy candy canes croissant muffin sesame snaps. Lollipop candy cake powder biscuit sweet toffee cotton candy. Cheesecake lollipop jelly-o bonbon gummi bears marzipan marzipan I love. Chocolate cake tootsie roll muffin.
                        Apple pie danish liquorice gummies. Caramels carrot cake halvah tootsie roll toffee biscuit soufflé liquorice. Muffin brownie I love topping sugar plum macaroon. I love lollipop lemon drops. Jujubes muffin pastry. Liquorice sweet pie wafer cupcake sugar plum candy halvah cotton candy. I love lollipop tootsie roll donut brownie. Sugar plum chocolate cake bear claw I love topping jelly-o.
                        Candy canes cookie sweet roll marzipan I love gingerbread. Candy chocolate cake bonbon croissant oat cake I love icing gummi bears. Liquorice danish apple pie marshmallow jelly-o. I love icing chocolate cake bear claw tiramisu soufflé liquorice croissant topping. Cake I love gummies sugar plum chocolate brownie. Liquorice sweet icing icing jelly halvah.
                        I love candy canes chocolate gingerbread I love wafer apple pie jujubes. Lollipop cake oat cake soufflé cotton candy candy canes pastry. Wafer tiramisu chocolate I love dessert chocolate halvah ice cream. Toffee sesame snaps I love donut marzipan. Ice cream I love wafer marzipan. Tiramisu liquorice sweet roll sugar plum icing sugar plum ice cream jelly beans jelly beans. Liquorice I love gummi bears danish marshmallow cookie cake.
                    </p>
    			</div>
    			)
    	}
    })

    var SubscribeBox = React.createClass({
        render: function(){
            return(
                <div className="subscribeBox">
                    
                </div>
                )
        }
    })

    DOM.render(<PageView/>, document.querySelector('.container'))
}

app()
