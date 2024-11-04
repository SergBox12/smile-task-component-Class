import React from 'react';
import styles from './smile.module.css';

export default class Smile extends React.Component {
    render() {
      return <div>
        <img className={styles.smileImg} src={this.props.smile.img} alt="pic" onClick={this.props.smile.increaseScore}/>
        <p>Score {this.props.smile.score}</p>
      </div>;
    }
  }