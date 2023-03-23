import { Request, Response, Router } from "express";

export class API {
  constructor(router: Router) {
    router.post("/replace", this.replace);
  }

  replace(req: Request, res: Response) {
    console.log(req.body());
  }
}
