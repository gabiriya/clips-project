import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];
  private modal: boolean = false;

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((m) => {
      m.id !== id;
    });
  }

  isModalOpen(id: string): boolean {
    // return !!this.modals.find((el) => el.id === id)?.visible;
    return this.modal;
  }

  toggleModal(id: string): void {
    // let modal = this.modals.find((m) => m.id === id);
    // // debugger;
    // if (modal) {
    //   modal.visible = !modal.visible;
    // }

    this.modal = !this.modal;
  }
}
