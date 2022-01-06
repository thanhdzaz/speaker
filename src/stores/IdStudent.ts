import { observable, action, makeObservable } from 'mobx';

class IdStudent {
  constructor() { makeObservable(this) }

  @observable studentChoose: string | undefined = '';

    @action setStudent(id = ''){
        this.studentChoose = id
    }
    @action rmStudent(){
        this.studentChoose = ''
    }

}

export default new IdStudent();