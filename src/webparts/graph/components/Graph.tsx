// import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import styles from './Graph.module.scss';
import { IGraphProps } from './IGraphProps';
import { escape } from '@microsoft/sp-lodash-subset';
import MediaQuery from 'react-responsive';
import { Text } from '@vx/text';
import { ScaleSVG } from '@vx/responsive';
import 'compose-dataset-shim';




import {
  Image,
  IImageProps,
  ImageFit
} from 'office-ui-fabric-react/lib/Image';


export default class Graph extends React.Component<IGraphProps,
  { showComponent: Boolean, windowTitle: string, windowDescription: string, windowLink: string, uniqueId: Date, }> {

  constructor(props: IGraphProps) {
    super(props);
    this.state = {
      showComponent: false,
      windowTitle: null,
      windowDescription: null,
      windowLink: null,
      uniqueId: null,
    };

  }



  // public _onButtonOpen = ev => this.setState({ showComponent: true, windowTitle: ev.dataset.windowTitle, windowDescription: ev.target.dataset.windowDescription, windowLink: ev.target.dataset.windowLink });

  public _onButtonOpen1 = ev => {
    let elmnt = document.getElementById('path1');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonOpen2 = ev => {
    let elmnt = document.getElementById('path2');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonOpen3 = ev => {
    let elmnt = document.getElementById('path3');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonOpen4 = ev => {
    let elmnt = document.getElementById('path4');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonOpen5 = ev => {
    let elmnt = document.getElementById('path5');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonOpen6 = ev => {
    let elmnt = document.getElementById('path6');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonOpen7 = ev => {
    let elmnt = document.getElementById('path7');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonOpen8 = ev => {
    let elmnt = document.getElementById('path8');
    this.setState({ showComponent: true, windowTitle: elmnt.getAttribute('data-windowTitle'), windowDescription: elmnt.getAttribute('data-windowDescription'), windowLink: elmnt.getAttribute('data-windowLink') });
  }

  public _onButtonClose = ev => this.setState({ showComponent: false });
  public uniqueId() {
    return new Date().getTime();
  }

  public handleOnMouseOver1 = e => {
    document.getElementById('path1').style.fillOpacity='.5';
  }

  public handleOnMouseOut1 = e =>{
    document.getElementById('path1').style.fillOpacity='1';
  }

  public handleOnMouseOver2 = e => {
    document.getElementById('path2').style.fillOpacity='.5';
  }

  public handleOnMouseOut2 = e =>{
    document.getElementById('path2').style.fillOpacity='1';
  }

  public handleOnMouseOver3 = e => {
    document.getElementById('path3').style.fillOpacity='.5';
  }

  public handleOnMouseOut3 = e =>{
    document.getElementById('path3').style.fillOpacity='1';
  }

  public handleOnMouseOver4 = e => {
    document.getElementById('path4').style.fillOpacity='.5';
  }

  public handleOnMouseOut4 = e =>{
    document.getElementById('path4').style.fillOpacity='1';
  }

  public handleOnMouseOver5 = e => {
    document.getElementById('path5').style.fillOpacity='.5';
  }

  public handleOnMouseOut5 = e =>{
    document.getElementById('path7').style.fillOpacity='1';
  }

  public handleOnMouseOver6 = e => {
    document.getElementById('path6').style.fillOpacity='.5';
  }

  public handleOnMouseOut6 = e =>{
    document.getElementById('path6').style.fillOpacity='1';
  }

  public handleOnMouseOver7 = e => {
    document.getElementById('path7').style.fillOpacity='.5';
  }

  public handleOnMouseOut7 = e =>{
    document.getElementById('path7').style.fillOpacity='1';
  }

  public handleOnMouseOver8 = e => {
    document.getElementById('path8').style.fillOpacity='.5';
  }

  public handleOnMouseOut8 = e =>{
    document.getElementById('path8').style.fillOpacity='1';
  }



  public render() {
    const that = this;
    const imageProps: IImageProps = {
      imageFit: ImageFit.contain,
    };
    function Annotation() {
      return (<div className={styles.box}>
        <div className={styles.row} key={that.uniqueId()}>
          <h2 className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">{escape(that.state.windowTitle)}</h2>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2" onClick={that._onButtonClose}>
            <span className={styles.close}>X</span>
          </div>
        </div>
        <p className={styles.bottomContent}>{escape(that.state.windowDescription)}</p>
        <a href={escape(that.state.windowLink)}>More informations</a>
      </div>
      );
    }



    return (
      <div className={styles.graph}>
        {this.state.showComponent ?
          <Annotation /> :
          null
        }
        <h1>{escape(that.props.description)}</h1>
        <ScaleSVG id="root" width={908} height={440} preserveAspectRatio="xMidYMin meet">

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg2">
            <g transform="translate(0,-612.36218)" id="layer1">
              <g transform="translate(-591.604,409.23583)" id="g3014">
                <g transform="matrix(1.0010408,0,0,1.0003756,-100.71982,99.796)" id="g3952">
                  <path d="m 891.65827,541.2732 c -41.08841,-2.86657 -84.80539,-20.68941 -119.49996,-48.71859 -13.27641,-10.7258 -16.44337,-14.07475 -14.48244,-15.31467 0.84537,-0.53453 15.98646,-0.94394 35.23244,-0.95267 l 33.75,-0.0153 0,-35.53138 c 0,-30.54257 0.20904,-35.61161 1.48884,-36.10271 0.90466,-0.34715 3.4893,1.22727 6.58726,4.0126 20.0663,18.04133 48.68236,28.63338 77.30486,28.61394 12.9162,-0.009 20.0526,-1.02054 32.2869,-4.5775 l 8.8321,-2.56785 39.9659,0.11669 c 30.06593,0.0878 40.15633,0.41635 40.73463,1.32644 0.4229,0.66537 0.7758,16.76125 0.7842,35.76863 0.012,26.12707 -0.2897,34.95829 -1.2347,36.19595 -1.9488,2.55228 -18.2036,12.41564 -29.25,17.74886 -17.39143,8.39655 -39.89533,15.34746 -59.54293,18.39134 -11.9914,1.85774 -38.0311,2.64754 -52.9571,1.60622 z M 1098.9789,348.24708 c -338.24993,196.58618 -169.12497,98.29309 0,0 z" id="path7"  style={{ fill: escape(this.props.color7), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription7} data-windowTitle={that.props.windowTitle7} data-windowLink={that.props.windowLink7} onMouseOut={this.handleOnMouseOut7} onMouseOver={this.handleOnMouseOver7} onClick={this._onButtonOpen7}   />
                  <path d="m 745.26747,466.17917 c -6.98379,-5.49345 -22.26075,-28.28586 -31.63481,-47.19742 -11.27885,-22.75438 -17.91681,-45.13304 -20.48655,-69.0666 -7.15295,-66.61983 10.56367,-123.98882 53.4467,-173.06822 5.08349,-5.81803 9.05463,-9.53131 9.99899,-9.34972 1.37625,0.26463 1.62724,4.67208 2.06651,36.28798 l 0.5,35.98677 c 16.69683,2.76578 54.82266,-3.71802 68.5,1.60364 0,0.59255 -1.95552,3.39915 -4.34559,6.23687 -19.17539,22.76681 -28.73526,50.93483 -27.35509,80.60135 0.95359,20.49705 6.29642,37.76992 17.18927,55.57122 l 5.49921,8.98692 0.006,36.55 c 0.005,27.10144 -0.30411,36.86021 -1.1939,37.75 -0.8865,0.8865 -10.12559,1.2 -35.36514,1.2 -33.1559,0 -34.24374,-0.0618 -36.8257,-2.09279 z" id="path8" style={{ fill: escape(this.props.color8), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription8} data-windowTitle={that.props.windowTitle8} data-windowLink={that.props.windowLink8} onMouseOut={this.handleOnMouseOut8} onMouseOver={this.handleOnMouseOver8} onClick={this._onButtonOpen8} />
                  <path d="m 995.15827,244.22599 c -12.0516,-12.1768 -19.8557,-17.967 -33,-24.48431 -37.8187,-18.75162 -80.65775,-16.13278 -115.55049,7.06387 l -6.71844,4.46641 -36.00852,0 c -31.91258,0 -36.07758,-0.17993 -36.61552,-1.58179 -0.33385,-0.86998 -0.60699,-17.37771 -0.60699,-36.68383 l 0,-35.10205 4.8154,-4.64143 c 7.56178,-7.28858 28.35638,-20.66096 43.6846,-28.09224 31.9727,-15.50071 60.43483,-21.92995 96.85686,-21.87876 34.6516,0.0487 58.6836,5.21146 86.3168,18.54323 20.91863,10.09234 41.33433,24.7924 65.82633,47.39753 10.2734,9.48196 12.5,11.8363 12.5,13.21734 0,0.43766 -15.4125,0.91415 -34.25,1.05887 l -34.25,0.26313 -0.5,34.48681 c -0.429,29.59307 -0.7129,34.52752 -2,34.77373 -0.825,0.15782 -5.55,-3.80511 -10.50003,-8.80651 z" id="path1" style={{ fill: escape(this.props.color1), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription1} data-windowTitle={that.props.windowTitle1} data-windowLink={that.props.windowLink1} onMouseOut={this.handleOnMouseOut1} onMouseOver={this.handleOnMouseOver1} onClick={this._onButtonOpen1} />
                  <path d="m 1193.125,444.0566 c -5.9541,-6.75655 -48.3198,-49.87083 -94.1461,-95.80952 l -83.3206,-83.52487 0,-35.68994 c 0,-34.6958 0.056,-35.71983 2.0049,-36.76295 1.3464,-0.72053 13.1701,-0.97846 35.9929,-0.78519 l 33.9879,0.28783 22.59,22.5 c 45.6317,45.4499 164.9243,168.33769 164.9243,169.8947 0,1.43735 -3.5819,1.63283 -34.2371,1.86841 l -34.237,0.26311 -0.263,34.65384 c -0.1834,24.17418 -0.5967,34.76503 -1.3668,35.02153 -0.6072,0.20223 -5.9754,-5.1604 -11.9295,-11.91695 z" id="path2" style={{ fill: escape(this.props.color2), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription2} data-windowTitle={that.props.windowTitle2} data-windowLink={that.props.windowLink2} onMouseOut={this.handleOnMouseOut2} onMouseOver={this.handleOnMouseOver2} onClick={this._onButtonOpen2} />
                  <path d="m 1348.6583,541.69715 c -29.1126,-3.05311 -61.6585,-15.07475 -86.7022,-32.0256 -12.51,-8.46741 -24.1235,-18.22833 -37.0478,-31.13796 l -10.25,-10.23837 0,-36.47645 c 0,-35.48295 0.055,-36.50567 2.0049,-37.54945 1.3461,-0.72042 13.1443,-0.97843 35.9034,-0.78519 l 33.8985,0.28783 10.4624,10.18027 c 5.7542,5.59915 14.5195,12.84436 19.4783,16.10047 41.7901,27.44086 96.0486,24.7064 135.748,-6.84127 4.1641,-3.30902 8.0061,-5.74753 8.5378,-5.41892 0.5916,0.36563 0.9667,13.76824 0.9667,34.53847 l 0,33.94098 36.941,0 c 26.2318,0 37.142,0.32535 37.6346,1.12227 0.8879,1.43672 -11.2577,12.92721 -23.1654,21.91576 -24.0451,18.1506 -52.013,31.47149 -80.9102,38.53694 -21.002,5.13505 -55.9032,6.74436 -83.5,3.85022 z" id="path3" style={{ fill: escape(this.props.color3), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription3} data-windowTitle={that.props.windowTitle3} data-windowLink={that.props.windowLink3} onMouseOut={this.handleOnMouseOut3} onMouseOver={this.handleOnMouseOver3} onClick={this._onButtonOpen3} />
                  <path d="m 1470.3247,467.60529 c -0.3667,-0.36666 -0.6653,-16.67916 -0.6635,-36.25 l 0,-35.58333 4.0544,-6 c 18.8364,-27.87491 24.9224,-61.92755 16.8537,-94.29946 -4.2718,-17.1384 -11.325,-30.66246 -23.6563,-45.35981 -5.9255,-7.06248 -7.2677,-9.22143 -6.1662,-9.91876 0.7744,-0.49024 17.0455,-0.89824 36.158,-0.90666 l 34.7502,-0.0153 0,-35.5 c 0,-29.35782 0.2366,-35.5 1.3673,-35.5 1.6503,0 14.3658,13.17251 20.7542,21.5 24.916,32.47867 40.2187,70.43221 43.7917,108.6116 2.2204,23.72585 0.9868,53.03401 -3.0891,73.3884 -5.7451,28.69026 -21.4557,62.29988 -40.8548,87.40062 l -7.0324,9.09938 -37.8018,0 c -20.791,0 -38.1018,-0.3 -38.4684,-0.66667 z" id="path4" style={{ fill: escape(this.props.color4), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription4} data-windowTitle={that.props.windowTitle4} data-windowLink={that.props.windowLink4} onMouseOut={this.handleOnMouseOut4} onMouseOver={this.handleOnMouseOver4} onClick={this._onButtonOpen4} />
                  <path d="m 1293.325,244.60529 c -0.3667,-0.36666 -0.6667,-16.34166 -0.6667,-35.5 l 0,-34.83333 -35.0314,0 c -31.8779,0 -35.0894,-0.15115 -35.6757,-1.67918 -0.7434,-1.93709 3.6566,-6.21126 19.2071,-18.65804 32.2289,-25.79627 65.7282,-41.0494 103.5,-47.12631 13.155,-2.11644 54.8614,-2.11481 68,0.003 11.8538,1.91039 26.7069,5.6234 38.4742,9.61781 20.8684,7.08379 53.7181,25.41498 67.7758,37.82111 l 4.75,4.19194 0,35.79256 c 0,29.4012 -0.2491,35.99934 -1.3952,36.95051 -1.0155,0.84279 -11.4261,1.08024 -38.25,0.87245 l -36.8548,-0.2855 -7.7216,-4.74309 c -21.1071,-12.96531 -47.5367,-19.15787 -71.4329,-16.737 -24.4389,2.47585 -42.6385,10.33048 -64.696,27.92168 -9.7236,7.75477 -9.0507,7.32392 -9.9828,6.39174 z" id="path5" style={{ fill: escape(this.props.color5), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription5} data-windowTitle={that.props.windowTitle5} data-windowLink={that.props.windowLink5} onMouseOut={this.handleOnMouseOut5} onMouseOver={this.handleOnMouseOver5} onClick={this._onButtonOpen5} />
                  <path d="m 1043.325,495.60529 c -0.3667,-0.36666 -0.6667,-17.01083 -0.6667,-36.98704 l 0,-36.32037 -34.667,-0.26296 c -24.92093,-0.18903 -34.77403,-0.58452 -35.04793,-1.40675 -0.2095,-0.62909 4.0196,-4.45134 9.3981,-8.4939 13.3891,-10.06344 32.24153,-28.614 59.54513,-58.59155 12.6591,-13.89892 23.7513,-25.27076 24.6493,-25.27076 2.0322,0 74.5103,72.34376 73.9961,73.85902 -0.6054,1.78416 -39.5,42.46176 -57.6441,60.28668 -15.0665,14.80138 -36.5943,33.8543 -38.2518,33.8543 -0.3545,0 -0.9445,-0.3 -1.3111,-0.66667 z m 149.6103,-208.52642 c -38.1503,-38.67577 -41.5316,-42.30876 -41.1125,-44.1734 0.5284,-2.35065 55.7654,-59.65637 58.508,-60.69908 3.8354,-1.45822 71.65,-1.21194 73.1275,0.26557 0.8881,0.88811 1.2,10.39576 1.2,36.58091 l 0,35.38091 -13.3562,14.16909 c -7.3458,7.793 -20.5083,22.00861 -29.25,31.59025 -8.7416,9.58165 -16.4206,17.59475 -17.0645,17.80691 -0.6439,0.21216 -15.0675,-13.70236 -32.0523,-30.92116 z M 912.01517,103.29186 c -213.60745,359.88966 -106.80372,179.94483 0,0 z" id="path6" style={{ fill: escape(this.props.color6), fillOpacity: 1 }} data-windowDescription={that.props.windowDescription6} data-windowTitle={that.props.windowTitle6} data-windowLink={that.props.windowLink6} onMouseOut={this.handleOnMouseOut6} onMouseOver={this.handleOnMouseOver6} onClick={this._onButtonOpen6} />
                </g>
              </g>
            </g>

            <Text lineHeight="1em" onMouseOut={this.handleOnMouseOut1} onMouseOver={this.handleOnMouseOver1} onClick={this._onButtonOpen1} verticalAnchor="middle" x="205" y="60" id="text1" width="200" textAnchor="middle" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText1), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField1)}
            </Text>
            <Text angle="45" lineHeight="1em" onMouseOut={this.handleOnMouseOut2} onMouseOver={this.handleOnMouseOver2} onClick={this._onButtonOpen2} verticalAnchor="middle" textAnchor="middle" x="435" y="185" id="text3" width="250" xmlSpace="preserve" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText2), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField2)}
            </Text>
            <Text lineHeight="1em" onMouseOut={this.handleOnMouseOut3} onMouseOver={this.handleOnMouseOver3} onClick={this._onButtonOpen3} verticalAnchor="middle" textAnchor="middle" x="666" y="375" id="text3" width="200" xmlSpace="preserve" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText3), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField3)}
            </Text>
            <Text lineHeight="1em" onMouseOut={this.handleOnMouseOut4} onMouseOver={this.handleOnMouseOver4} onClick={this._onButtonOpen4} verticalAnchor="middle" textAnchor="middle" x="850" y="220" id="text4" width="120" xmlSpace="preserve" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText4), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField4)}
            </Text>
            <Text lineHeight="1em" onMouseOut={this.handleOnMouseOut5} onMouseOver={this.handleOnMouseOver5} onClick={this._onButtonOpen5} verticalAnchor="middle" textAnchor="middle" x="700" y="60" id="text5" width="200" xmlSpace="preserve" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText5), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField5)}
            </Text>
            <Text angle='-45' lineHeight="1em" onMouseOut={this.handleOnMouseOut6} onMouseOver={this.handleOnMouseOver6} onClick={this._onButtonOpen6} verticalAnchor="middle" textAnchor="middle" x="530" y="145" id="text6" width="100" xmlSpace="preserve" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText6), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField6)}
            </Text>
            <Text lineHeight="1em" onMouseOut={this.handleOnMouseOut7} onMouseOver={this.handleOnMouseOver7} onClick={this._onButtonOpen7} verticalAnchor="middle" textAnchor="middle" x="235" y="370" id="text7" width="200" xmlSpace="preserve" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText7), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField7)}
            </Text>
            <Text lineHeight="1em" onMouseOut={this.handleOnMouseOut8} onMouseOver={this.handleOnMouseOver8} onClick={this._onButtonOpen8} verticalAnchor="middle" textAnchor="middle" x="65" y="230" id="text8" width="120" xmlSpace="preserve" style={{ fontSize: 40, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '125%', letterSpacing: 0, wordSpacing: 0, fill: escape(this.props.colorText8), fillOpacity: 1, stroke: 'none', fontFamily: 'Sans' }}>
              {escape(this.props.textField8)}
            </Text>
          </svg>
        </ScaleSVG>
      </div>

    );
  }

}
