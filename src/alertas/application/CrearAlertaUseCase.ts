import { Alerta } from "../domain/Alerta";
import { AlertaRepository } from "../domain/AlertaRepository";

export class CrearAlertaUseCase {
  constructor(readonly alertaRepository: AlertaRepository) {}

  async run(
    id: number,
    tipo: string,
    descripcion: string,
    hora: string
  ): Promise<Alerta | null> {
    try {
      const alert = await this.alertaRepository.crearAlerta(
        id,
        tipo,
        descripcion,
        hora
      );
      return alert;
    } catch (error) {
      return null;
    }
  }
}
