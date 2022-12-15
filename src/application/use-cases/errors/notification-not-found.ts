export class NotificationNotFound extends Error {
  constructor() {
    // o super é básicamente chamar o constructor da classe Error
    super('Notification not found.');
  }
}
