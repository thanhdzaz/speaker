import { observable, action, makeObservable } from 'mobx';

class IdProduct {
  constructor() { makeObservable(this) }

  @observable productChoose: string | undefined = '';

    @action setProduct(id = ''){
        this.productChoose = id
    }
    @action rmProduct(){
        this.productChoose = ''
    }

}

export default new IdProduct();