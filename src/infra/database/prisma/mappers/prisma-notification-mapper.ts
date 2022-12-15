import { Notification as RawNotification } from '@prisma/client';

import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  // esse método vai ser estático porque assim eu não preciso instanciar a classe
  // PrismaNotificationMapper
  static toPrisma(notification: Notification) {
    // esse método vai receber a notification da entidade e vai converter para
    // um formato de como o Prisma precisa utilizar a notification
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
