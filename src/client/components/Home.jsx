import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import classnames from 'classnames';
import rug1 from 'Images/rug1.png';
import rug2 from 'Images/rug2.png';
import rug3 from 'Images/rug3.png';
import ProductList from 'Components/ProductList';

class Canvas extends React.Component {

  static propTypes = {
    img: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

  drawImageToCanvas = (img) => {
    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.drawImage(img, - this.canvas.width / 2, - this.canvas.height / 2, img.width / 2, img.height / 2);
    ctx.restore();
  }

  drawColorOverlay = () => {
    const canvas = document.createElement('canvas');
    canvas.width = this.canvas.width;
    canvas.height = this.canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = this.props.color;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const drawingCtx = this.canvas.getContext('2d');
    drawingCtx.save();
    drawingCtx.globalCompositeOperation = 'color';
    drawingCtx.drawImage(canvas, 0, 0);
    drawingCtx.restore();
  }

  loadImage = () => {
    const img = document.createElement('img');

    img.addEventListener('load', () => {
      this.drawImageToCanvas(img);
      this.drawColorOverlay();
    });

    img.src = this.props.img;
  }

  componentDidMount() {

    this.loadImage();

    // load image to canvas
    // add color overlay

  }

  getRef = c => {
    this.canvas = c;
  }
  render() {
    return (
      <canvas ref={this.getRef} />
    );
  }
}

const FEATURED_RUGS = [
  {
    name: 'Theo',
    id: '1',
    size: '6x12',
    country: 'Persia',
    src: rug1,
  },
  {
    name: 'Jenni',
    id: '2',
    size: '6x12',
    country: 'Persia',
    src: rug2,
  },
  {
    name: 'Jenni',
    id: '2',
    size: '6x12',
    country: 'Persia',
    src: rug3,
  },
];

const COLORS = ['#42D044', '#2D76CE', '#5C3D6D'];

class Slide extends React.Component {

  state = {}

  componentWillAppear(cb) {
    this.setState({
      entering: true,
      appear: true,
    });
    cb();
  }

  componentWillEnter(cb) {
    this.setState({
      entering: true,
      appear: false,
    });
    cb();
  }

  animationEndFunc = (cb, name) => (e) => {
    if (e.animationName === name) {
      cb();
    }
  }

  componentWillLeave(cb) {
    this.setState({
      imgAnimationEndFunc: this.animationEndFunc(cb, 'slideLeave'),
      leaving: true,
      entering: false,
      appear: false,
    });
  }
  render() {
    const { img, color, Cta } = this.props;
    return (
      <div
        onAnimationEnd={this.state.imgAnimationEndFunc}
        className={classnames('animation-wrap', {
          leaving: this.state.leaving,
          entering: this.state.entering && !this.state.appear,
        })}
      >
        <div
          className={classnames('flex-parent flex-grow-1 slide-wrap', {

          })}
        >
          <div className="flex-parent flex-grow-1 home-slide-flex">
            <div className="home-slide-box">
              <Cta />
            </div>
            <div className="home-slide-box home-slide-img-box">
              <img
                className={classnames('home-slide-img', {
                  leaving: this.state.leaving,
                  entering: this.state.entering,
                })}
                src={img}
              />
            </div>
            <div className="home-slide-box">
            <h2 className="font-color--white align--center">
                Rug Name
            </h2>
            <h3 className="font-color--white align--center">8x12</h3>
              <button className="btn btn--white margin--top-3">Add To Cart</button>
            </div>
          </div>
          <div className="home-slide-bg">
            <Canvas img={img} color={color} />
          </div>
        </div>
      </div>
    );
  }

}

const interval = (callback, delay, arr) => {
  const tick = now => {
    if (now - start >= delay) {
      start = now;
      callback();
    }
    arr.push(requestAnimationFrame(tick));
  };
  let start = performance.now();
  arr.push(requestAnimationFrame(tick));
};

const DURATION = 3500;

class Home extends React.Component {

  constructor() {
    super();
  }

  state = {
    currentIndex: 0,
  }

  Cta = () => (
    <div className="flex-parent flex-col flex-align-center">
      <h1 className="font-color--white align--center">
        Handmade, <span style={{ display: 'block' }}>artisan rugs</span>
      </h1>
      <button className="btn btn--white margin--top-5">Shop Selection</button>
    </div>
  )

  updateSlide = () => {
    let currentIndex;
    if (this.state.currentIndex < this.slides.length - 1) {
      currentIndex = this.state.currentIndex + 1;
    } else {
      currentIndex = 0;
    }
    this.setState({ currentIndex });
  }

  int = [];

  componentDidMount() {
    interval(this.updateSlide, DURATION, this.int);
  }

  componentWillUnmount() {
    this.int.forEach(int => window.cancelAnimationFrame(int));
  }

  slides = FEATURED_RUGS.map((obj, i) => <Slide key={i} img={obj.src} Cta={this.Cta} color={COLORS[i]} />)

  render() {
    const { Cta } = this;
    return (
      <div className="flex-parent flex-grow-1 flex-col">
        <ReactTransitionGroup
          component="div"
          style={{
            transform: 'translate3d(0,0,0)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100%',
          }}
          className="flex-parent flex-grow-1 home-transition-group"
        >
          {this.slides[this.state.currentIndex]}
        </ReactTransitionGroup>
        <div className="padding--top-15 padding--bottom-10">
          <h1 className="align--center">Our Selection</h1>
          <ProductList />
        </div>
      </div>
    );
  }
}

export default Home;
