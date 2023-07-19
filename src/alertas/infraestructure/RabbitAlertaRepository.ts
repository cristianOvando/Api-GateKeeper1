import amqp from "amqplib";

import { Alerta } from "../domain/Alerta";
import { AlertaRepository } from "../domain/AlertaRepository";

const rabbitSettings = {
  protocol: "amqp",
  hostname: "54.160.15.204",
  port: 5672,
  username: "Martin Espinosa",
  password: "Xiaomi8pro",
};

export class RabbitAlertaRepository implements AlertaRepository {
  async crearAlerta(
    id: number,
    tipo: string,
    descripcion: string,
    hora: string
  ): Promise<Alerta | null> {
    try {
      const alert = new Alerta(id, tipo, descripcion, hora);
      (async () => {
        const queue = "queueAlerta";
        const message = JSON.stringify(alert);

        try {
          const conn = await amqp.connect(rabbitSettings);
          console.log("Conexión exitosa");

          const channel = await conn.createChannel();
          console.log("Canal creado exitosamente");

          const res = await channel.assertQueue(queue);
          console.log("Cola creada exitosamente", res);

          await channel.sendToQueue(queue, Buffer.from(message));

          console.log(`Mensaje insertado en la cola: ${message}`);
        } catch (error) {
          console.log("no se pudo agregar la alerta:", error);
          throw error;
        }
      })();
      return alert;
    } catch (error) {
      return null;
    }
  }

  async crearNotificacionAlerta(
    id: number,
    tipo: string,
    descripcion: string,
    hora: string
  ): Promise<any> {
    try {
      const notificacion = {
        id,
        tipo,
        descripcion,
        hora,
      };
      (async () => {
        const queue = "queueNotificaciones";
        const message = JSON.stringify(notificacion);

        try {
          const conn = await amqp.connect(rabbitSettings);
          console.log("Conexión exitosa");

          const channel = await conn.createChannel();
          console.log("Canal creado exitosamente");

          const res = await channel.assertQueue(queue);
          console.log("Cola creada exitosamente", res);

          await channel.sendToQueue(queue, Buffer.from(message));

          console.log(`Mensaje insertado en la cola: ${message}`);
        } catch (error) {
          console.log("no se pudo agregar la cola de notificaciones", error);
          throw error;
        }
      })();
      return notificacion;
    } catch (error) {
      return null;
    }
  }
}
