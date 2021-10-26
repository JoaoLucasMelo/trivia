import { ProxyState } from "../AppState.js";




  export function saveStateHs(){
    localStorage.setItem('highest', JSON.stringify({
      highest: ProxyState.highest
    }))
  }

  export function loadStateHs(){

    let data = JSON.parse(localStorage.getItem('highest'))
    if(data != null){
      ProxyState.highest = data.highest
    }
  }