import React from 'react';
import Smile from './smile.jsx';
import styles from './mainPage.module.css';


export default class MainPage extends React.Component {
 
    render() {
      return <div className={styles.smilesContainer}>
        <ul className={styles.smilesList}>
            <li className={styles.smile}><Smile smile = {this.props.smiles.trollFace}/></li>
            <li className={styles.smile}><Smile smile = {this.props.smiles.trollFaceShout}/></li>
            <li className={styles.smile}><Smile smile = {this.props.smiles.trollFaceFuck}/></li>
        </ul>

        <button className={styles.btnSmile} onClick={()=> {

          const trollFaceScore = this.props.smiles.trollFace.score;
          const trollFaceShoutScore = this.props.smiles.trollFaceShout.score;
          const trollFaceFuckScore = this.props.smiles.trollFaceFuck.score;

          if (trollFaceScore > trollFaceShoutScore & trollFaceScore > trollFaceFuckScore) {
            const winner = `Winner is TrollFace with a score ${trollFaceScore}`;
            this.props.winner.updateWinner(winner)
          } else if (trollFaceShoutScore > trollFaceScore & trollFaceShoutScore > trollFaceFuckScore){
            const winner = `Winner is TrollFaceShout with a score ${trollFaceShoutScore}`;
            this.props.winner.updateWinner(winner)
          } else if (trollFaceFuckScore > trollFaceScore & trollFaceFuckScore > trollFaceShoutScore){
            const winner = `Winner is trollFaceFuck with a score ${trollFaceFuckScore}`;
            this.props.winner.updateWinner(winner)
          } else this.props.winner.updateWinner('no winner motherfuckers')

        }}>Winner</button>

        <p>{this.props.winner.winner}</p>
        
        <button className={styles.btnSmile} onClick={() => {
            this.props.smiles.trollFaceShout.removeScore();
            this.props.smiles.trollFace.removeScore();
            this.props.smiles.trollFaceFuck.removeScore();
            this.props.winner.updateWinner('');
        }}>Clean</button>
        
      </div>;
    }
  }