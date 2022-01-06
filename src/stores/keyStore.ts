import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { HydratedStore } from 'src/utils/classes';

class keyStore extends HydratedStore {
  constructor() {
    super('keyStore'); // Storage ID
    makeObservable(this);
  }

  @persist @observable value = '';
 

  @action setKeyApi = async(key = '') => {
      this.value = key;
  }

  @action rmKeyApi = async () => {
    this.value = "";
  }

  
}

export default new keyStore();