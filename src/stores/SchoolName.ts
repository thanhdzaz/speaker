import { observable, action, makeObservable } from 'mobx';

class School {
  constructor() { makeObservable(this) }

  @observable School: string | undefined = '';

    @action setSchool(School = ''){
        this.School = School
    }
    @action rmSchool(){
        this.School = ''
    }

}

export default new School();