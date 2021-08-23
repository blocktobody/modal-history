const stack: string[] = [];

class OpenModalStack {
  pushModalKey(modalKey: string) {
    const openModals = this.getOpenModals();

    if (openModals.includes(modalKey)) {
      return;
    }

    stack.push(modalKey);
  }

  popModalKey(): string {
    const openModals = this.getOpenModals();

    if (!openModals.length) {
      return '';
    }

    const [poppedModalKey] = stack.splice(openModals.length - 1, 1);

    return poppedModalKey;
  }

  getOpenModals(): string[] {
    return stack;
  }

  clearOpenModals() {
    stack.splice(0, stack.length);
  }
}

export const openModalStack = new OpenModalStack();
