import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private CreateUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.CreateUserUseCase.execute({
        name,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      response
        .status(400)
        .send({ message: error.message || "Unexpected error" });
    }
  }
}
