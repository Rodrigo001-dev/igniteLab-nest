import { randomUUID } from 'node:crypto';

import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  // estou informando que nesse momento o CreatedAt pode ser opcional
  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    // se o id existir eu uso ele se não eu uso um randomUUID
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      // se o createAt não for informado eu crio ele com a data atual
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  //os getters e setters são métodos que definimos dentro da entidade, são métodos
  // para acessar um valor específico(get) dentro da entidade ou atualizar
  // um valor específico(set)
  // os getters e setters servem como interceptadores no momento de qualquer parte
  // do código acessar uma propriedade ou tentar alterar o valor da propriedade
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  // não criei um set para o readAt porque não faz sentido o caso de uso
  // alterar esse campo como ele quiser
  public read() {
    this.props.readAt = new Date();
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public unread() {
    this.props.readAt = null;
  }

  // não criei um set para o canceledAt porque não faz sentido o caso de uso
  // alterar esse campo como ele quiser
  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
