import { observable, action, makeObservable } from 'mobx';

class Location {
  constructor() { makeObservable(this) }

  @observable location: string | undefined = '';

    @action setLocation(location = ''){
        this.location = location
    }
    @action rmLocation(){
        this.location = ''
    }

}

export default new Location();