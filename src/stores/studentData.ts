import { observable, action, makeObservable } from 'mobx';

class StudentData {
  constructor() { makeObservable(this) }

  @observable StudentData: {} | undefined = {};

    @action setStudentData(StudentData = {}){
        this.StudentData = StudentData
    }
    @action rmStudentData(){
        this.StudentData = {}
    }

}

export default new StudentData();