export class Alerta {
  constructor(
    readonly id: number,
    readonly tipo: string,
    readonly descripcion: string,
    readonly hora: string
  ) {}
}
