export type EventListener = (params?: any) => void;

class EventsHandler {
  private listeners: EventListener[] = [];

  public attach(listener: EventListener) {
    this.listeners.push(listener);
  }

  public detach(listenerToRemove: EventListener) {
    this.listeners = this.listeners.filter(
      (listener) => listener !== listenerToRemove
    );
  }

  public notify(params?: any) {
    this.listeners.forEach((listener) => listener(params));
  }
}

const eventsHandler = new EventsHandler();

export default eventsHandler;
