import { observable, action, makeObservable } from 'mobx';

class ChatBoxMainId {
  constructor() { makeObservable(this) }

  @observable chatBoxMainId: string | undefined = '';

    @action setChatBoxMainId(id = ''){
        this.chatBoxMainId = id
    }
    @action rmChatBoxMainId(){
        this.chatBoxMainId = ''
    }

}

export default new ChatBoxMainId();