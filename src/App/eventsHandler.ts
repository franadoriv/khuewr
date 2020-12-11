export type EventListener = {
  typeName: string;
  action: (params?: any) => void;
};

class EventsHandler {
  private listeners: EventListener[] = [];

  public attach(listener: EventListener) {
    this.listeners.push(listener);
  }

  public detach(actionToRemove: (params?: any) => void) {
    this.listeners = this.listeners.filter(
      (listener) => listener.action !== actionToRemove
    );
  }

  public setTitle(title: string) {
    this.listeners
      .filter((l) => l.typeName === "setTitle")
      .forEach((listener) => listener.action?.(title));
  }
}

const eventsHandler = new EventsHandler();

export default eventsHandler;
