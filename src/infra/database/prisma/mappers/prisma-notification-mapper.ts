import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  // esse método vai ser estático porque assim eu não preciso instanciar a classe
  // PrismaNotificationMapper
  static toPrisma(notification: Notification) {
    // esse método vai receber a notification da entidade e vai converter para
    // um formato de como o Prisma precisa utilizar a notification
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
