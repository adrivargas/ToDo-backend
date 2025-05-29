
export class CreateTaskDto {
  title: string;
  description?: string;
  categoryId?: string;
  userId: string;  // Añade esta propiedad para asignar el usuario
}



export class UpdateTaskDto {
  title?: string;
  description?: string;
  completed?: boolean;
  categoryId?: number;
}
