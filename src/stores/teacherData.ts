import { observable, action, makeObservable } from 'mobx';

class TeacherData {
  constructor() { makeObservable(this) }

  @observable TeacherData: {} | undefined = {};

    @action setTeacherData(TeacherData = {}){
        this.TeacherData = TeacherData
    }
    @action rmTeacherData(){
        this.TeacherData = {}
    }

}

export default new TeacherData();