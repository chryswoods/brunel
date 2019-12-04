
import Dry from 'json-dry';
import uuidv4 from 'uuid';
import vis from "vis-network";

import Message from "./Message";
import { KeyError, MissingError } from './Errors';

function _generate_message_uid(){
  let uid = uuidv4();
  return "M" + uid.substring(uid.length-7);
}

class Messages {
  constructor(props){
    this.state = {
      registry: {},
    };
  };

  _updateHooks(hook){
    this._getHook = hook;
    for (let key in this.state.registry){
      this.state.registry[key]._updateHooks(hook);
    }
  }

  add(message){
    if (!(message instanceof Message)){ return;}

    let id = message.getID();

    if (id){
      if (id in this.state.registry){
        throw KeyError(`Duplicate Message ID ${message}`);
      }

      this.state.registry[id] = message;
    }
    else{
      let uid = _generate_message_uid();

      while (uid in this.state.registry){
        uid = _generate_message_uid();
      }

      message.state.id = uid;
      this.state.registry[uid] = message;
    }
  }

  get(id){
    let message = this.state.registry[id];

    if (message === null){
      throw MissingError(`No Message with ID ${id}`);
    }

    return message;
  }

  getConnectionsTo(item){
    let id = item.getID();

    let connections = [];
    let seen = {};

    for (let key in this.state.registry){
      let message = this.state.registry[key];
      let n = null;

      if (message.state.sender === id){
        n = this._getHook(message.state.receiver);
      }
      else if (message.state.receiver === id){
        n = this._getHook(message.state.sender);
      }

      if (n){
        let n_id = n.getID();
        if (!(n_id in seen)){
          connections.push(n);
          seen[n_id] = 1;
        }
      }
    }

    return connections;
  }

  getEdges(){
    let edges = new vis.DataSet();

    for (let key in this.state.registry){
      let message = this.state.registry[key];
      edges.add(message.toEdge());
    }

    return edges;
  }

  toDry(){
    return {value: this.state.registry};
  }
};

Messages.unDry = function(value){
  let messages = new Messages();
  messages.state = value;
  return messages;
}

Dry.registerClass("Messages", Messages);

export default Messages;
