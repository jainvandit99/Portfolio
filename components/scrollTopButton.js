import React, { Component } from 'react'
import $ from 'jquery'

class ScrollTopButton extends Component {


    componentDidMount(){
        $("#scrollTopButton").on("click",function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
            return false;
        });

        Waypoint = window.Waypoint

        $("#scrollTopButton").fadeOut(1);
        var waypoint = new Waypoint({
            element: document.getElementById('waypoint-scrolltop'),
            handler: function(direction) {
                if (direction === 'down') {
                    $("#scrollTopButton").fadeIn(200);
                }
                else {
                    $("#scrollTopButton").fadeOut(200);
                }
            },
            offset: '0' 
        })

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        TweenMax = window.TweenMax
        var HoverButton = function () {
        function HoverButton(el) {
            _classCallCheck(this, HoverButton);

            this.el = el;
            this.hover = false;
            this.calculatePosition();
            this.attachEventsListener();
        }

        HoverButton.prototype.attachEventsListener = function attachEventsListener() {
            var _this = this;

            window.addEventListener('mousemove', function (e) {
                return _this.onMouseMove(e);
            });
            window.addEventListener('resize', function (e) {
                return _this.calculatePosition(e);
            });
        };

        HoverButton.prototype.calculatePosition = function calculatePosition() {
            TweenMax.set(this.el, {
                x: 0,
                y: 0,
                scale: 1
            });
            var box = this.el.getBoundingClientRect();
            this.x = box.left + box.width * 0.5;
            this.y = box.top + box.height * 0.5;
            this.width = box.width;
            this.height = box.height;
        };

        HoverButton.prototype.onMouseMove = function onMouseMove(e) {
            var hover = false;
            var hoverArea = this.hover ? 1.5 : 1.5;
            var x = e.clientX - this.x;
            var y = e.clientY - this.y;
            var distance = Math.sqrt(x * x + y * y);
            if (distance < this.width * hoverArea) {
                hover = true;
                if (!this.hover) {
                    this.hover = true;
                }
                this.onHover(e.clientX, e.clientY);
            }

            if (!hover && this.hover) {
                this.onLeave();
                this.hover = false;
            }
        };

        HoverButton.prototype.onHover = function onHover(x, y) {
            TweenMax.to(this.el, 0.4, {
                x: (x - this.x) * 0.4,
                y: (y - this.y) * 0.4,
                scale: 1.15,
                ease: Power2.easeOut
            });
            this.el.style.zIndex = 10;
        };

        HoverButton.prototype.onLeave = function onLeave() {
            TweenMax.to(this.el, 0.7, {
                x: 0,
                y: 0,
                scale: 1,
                ease: Elastic.easeOut.config(1.2, 0.4)
            });
            this.el.style.zIndex = 1;
        };

        return HoverButton;
        }();

        var attracter1 = document.getElementById('scrollTopButton');
        new HoverButton(attracter1);   
    }

    render(){
        return(
            <button className="scrollTopButton" id="scrollTopButton">
                <img src="/icon-scrolltop.svg"></img>
            </button>
        )
    }
}

export default ScrollTopButton