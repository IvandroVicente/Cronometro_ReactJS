import React, {Component} from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faRunning } from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      minute: 0,
      botao: 'Iniciar',
      isRunning: false,
    };
    
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  iniciar(){

    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Iniciar';
      state.isRunning = false;
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.minute += 0.1;
        this.setState(state);
      },100);
      state.botao = 'Pausar';
      state.isRunning = true;
    }

    this.setState(state);
  }

  limpar(){
      
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.minute = 0;
    state.botao = 'Iniciar';
    state.isRunning = false;
    this.setState(state);
  }
 
  render(){
  return (
      <div className="App-header">

          <div className="div-pai">
           <div className="div-cron">
               <div className="div-top">Ivandro</div>

                       <a className="minute">{this.state.minute.toFixed(1)}</a>

               <div className="div-bottom">
                 <FontAwesomeIcon icon={this.state.isRunning ? faRunning : faWalking} className={this.state.isRunning ? 'running-icon' : ''} />
               </div>
           </div>
          </div>
          <div className="area-buttom">
                <a className="buttom" onClick={this.iniciar}>{this.state.botao}</a>
                <a className="buttom" onClick={this.limpar}>Limpar</a>
          </div>
      </div>
  );
}
}

export default App;
