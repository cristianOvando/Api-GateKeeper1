import { Alerta } from "./Alerta";

export interface AlertaRepository {
  crearAlerta(
    id: number,
    tipo: string,
    descripcion: string,
    hora: string
  ): Promise<Alerta | null>;

  crearNotificacionAlerta(
    id: number,
    tipo: string,
    descripcion: string,
    hora: string
  ): Promise<any>;
}
